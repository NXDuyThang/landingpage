import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ các thông tin bắt buộc (Họ tên, Email, Lời nhắn)." },
        { status: 400 }
      );
    }

    // Connect to MongoDB database
    const client = await clientPromise;
    const db = client.db("portfolio");
    
    // Save to collection 'contacts'
    const result = await db.collection("contacts").insertOne({
      name,
      email,
      subject: subject || "Liên hệ từ Portfolio",
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Gửi lời nhắn thành công!", id: result.insertedId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("MongoDB error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi lưu trữ thông tin của bạn. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
