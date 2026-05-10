import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("zurich-agroscience");

    await db.collection("contacts").insertOne({
      name,
      phone,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, message: "we will get back to you shortly" });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
};