import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("zurich-agroscience");

    // Return basic info: collections and user count
    const collections = await db.listCollections().toArray();
    const usersCount = await db.collection("users").countDocuments();

    return NextResponse.json({ ok: true, collections: collections.map((c) => c.name), usersCount });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}

export async function POST() {
  try {
    const client = await clientPromise;

    const db = client.db("zurich-agroscience");

    const result = await db.collection("users").insertOne({ name: "John Doe", email: "john@example.com", createdAt: new Date() });

    return NextResponse.json({ message: "User created successfully", id: result.insertedId });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}