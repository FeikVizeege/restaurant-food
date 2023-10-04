import { NextResponse } from "next/server"

export const GET = () => {
    return new NextResponse('GET', { status: 200 });
};

export const POST = () => {
    return new NextResponse('POST', { status: 200 });
};