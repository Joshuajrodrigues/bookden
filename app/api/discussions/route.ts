import { NextResponse } from "next/server";
import data from "@/app/api/discuss.json"

export async function GET() {
    return NextResponse.json(data)
}