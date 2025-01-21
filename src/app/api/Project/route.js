import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function GET()
{
    try{
        const res = await prisma.project.findMany();
        return NextResponse.json(res);
    }
    catch(error)
    {
    // Return a failure response with the error message
    return NextResponse.json({ error: "Failed to get employee Data", details: error.message }, { status: 500 }); 
    }
}
// Create a new employee
export async function PUT(request) {
  try {
    // Destructuring the body of the request using the field names from your Prisma schema
    const {p_id , p_name , p_status , p_budget , p_deadline} = await request.json();

    // Create a new employee in the database using Prisma
    const result = await prisma.project.update({
      data: {
       p_id , p_name , p_status , p_budget , p_deadline
       
      }
    });

    // Return a success response with the created employee data
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Return a failure response with the error message
    return NextResponse.json({ error: "Failed to create employee", details: error.message }, { status: 500 });
  }
}


 