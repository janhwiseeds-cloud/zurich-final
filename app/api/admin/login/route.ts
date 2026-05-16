import { NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/auth";
import { hash } from "bcryptjs";

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || "$2a$12$K9U9K9K9K9K9K9K9K9K9KOZjQ0ZjQ0ZjQ0ZjQ0ZjQ0ZjQ0ZjQ0Zi"; // default hash for "admin123"

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ ok: false, error: "Password required" }, { status: 400 });
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
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}
