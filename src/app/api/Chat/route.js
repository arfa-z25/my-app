import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function GET()
{
    try{
        const res = await prisma.chat.findMany();
        return NextResponse.json(res);
    }
    catch(error)
    {
    // Return a failure response with the error message
    return NextResponse.json({ error: "Failed to get employee Data", details: error.message }, { status: 500 }); 
    }
}
// Create a new employee
export async function POST(request) {
  try {
    // Destructuring the body of the request using the field names from your Prisma schema
    const {content , employee_id} = await request.json();

    // Create a new employee in the database using Prisma
    const result = await prisma.chat.create({
      data: {
       content , employee_id
       
      }
    });

    // Return a success response with the created employee data
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Return a failure response with the error message
    return NextResponse.json({ error: "Failed to create employee", details: error.message }, { status: 500 });
  }
}
