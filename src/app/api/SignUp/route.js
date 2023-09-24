import {connectMongoDB} from "@/lib/mongodb";
import User from "@/models/user";
import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const {name, email, password} = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const userExits = await User.findOne({email});

    if (!userExits) {
      await User.create({name, email, password: hashedPassword});

      console.log(name, email, password);
      return NextResponse.json({message: "User registered"}, {status: 200});
    }
  } catch {
    return NextResponse.json(
      {
        message: "An error occured",
      },
      {status: 500}
    );
  }
}
