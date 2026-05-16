import clientPromise from "@/lib/mongodb";
import { verifySession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Verify admin session
    const session = await verifySession();
    if (!session?.isAdmin) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("zurich-agroscience");

    const contacts = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ ok: true, data: contacts });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}
