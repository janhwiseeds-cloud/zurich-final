import { NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/auth";

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ ok: false, error: "Password required" }, { status: 400 });
    }

    if (!ADMIN_PASSWORD_HASH) {
      console.error("ADMIN_PASSWORD_HASH is not set in environment variables");
      return NextResponse.json(
        { ok: false, error: "Server configuration error: Password hash not set" },
        { status: 500 }
      );
    }

    // Verify password against hashed admin password
    const isValid = await verifyPassword(password, ADMIN_PASSWORD_HASH);

    if (!isValid) {
      return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 401 });
    }

    // Create session
    await createSession("admin");

    return NextResponse.json({ ok: true, message: "Logged in successfully" });
  } catch (err: any) {
    console.error("Login error:", err);
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}
