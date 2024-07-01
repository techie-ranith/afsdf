import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/db';
import Job from '@/models/Job';


export async function POST(req: any) {
    try {
        const { name, email, password } = await req.json();
        await connectDB();

        await Job.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "Job posted" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
