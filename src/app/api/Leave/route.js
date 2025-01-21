import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function GET()
{
    try{
        const res = await prisma.holiday.findMany();
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
    const {leave_type , start_date , end_date , reason , employee_id} = await request.json();

    // Create a new employee in the database using Prisma
    const result = await prisma.holiday.create({
      data: {
        leave_type , start_date , end_date , reason , employee_id
       
      }
    });

    // Return a success response with the created employee data
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Return a failure response with the error message
    return NextResponse.json({ error: "Failed to create employee", details: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  const { id } =  await req.json(); 
  const leave_id = parseInt(id);// Get the leave ID from the URL

  try {
    // Delete the leave request with the provided ID
    await prisma.holiday.delete({
      where: { leave_id } // Ensure the ID is an integer
    });

    return res.status(200).json({ message: "Leave request rejected successfully" });
  } catch (error) {
    console.error("Error deleting leave:", error);
    return res.status(500).json({ error: "Failed to reject leave", details: error.message });
  }
}


export async function PUT(req, res) {
  const { id } = req.query; // Get the leave ID from the URL
  const { reason } = await req.json(); // Get the updated reason (e.g., "Approved")

  try {
    // Update the leave request with the provided ID
    const updatedLeave = await prisma.leave.update({
      where: { leave_id: parseInt(id) }, // Ensure the ID is an integer
      data: { reason: reason || "Approved" }, // Default reason is "Approved"
    });

    return res.status(200).json(updatedLeave);
  } catch (error) {
    console.error("Error updating leave:", error);
    return res.status(500).json({ error: "Failed to approve leave", details: error.message });
  }
}