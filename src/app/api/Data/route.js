import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function GET()
{
    try{
        const res = await prisma.employee.findMany();
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
    const { First_Name, Last_Name, Department, phone_no ,  Role, email, password , job_Title} = await request.json();

    // Create a new employee in the database using Prisma
    const result = await prisma.employee.create({
      data: {
        First_Name,
        Last_Name,
        Department,
        phone_no , 
        Role,
        email,
        password , 
        job_Title , 
       
      }
    });

    // Return a success response with the created employee data
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Return a failure response with the error message
    return NextResponse.json({ error: "Failed to create employee", details: error.message }, { status: 500 });
  }
}


export async function PUT(request) {
    try {
      // Destructuring the body of the request using the field names from your Prisma schema
      const id = 2 ;
      const { First_Name, Last_Name, Department, Role, email, password } = await request.json();
  
      // Create a new employee in the database using Prisma
      const result = await prisma.employee.update({
        where: {id},
        data: {
          First_Name,
          Last_Name,
          Department,
          Role,
          email,
          password
        }
      });
  
      // Return a success response with the created employee data
      return NextResponse.json(result, { status: 201 });
    } catch (error) {
      // Return a failure response with the error message
      return NextResponse.json({ error: "Failed to create employee", details: error.message }, { status: 500 });
    }
  }


  export async function DELETE() {
    try {
      // Destructuring the body of the request using the field names from your Prisma schema
      const id = 2 ;
  
      // Create a new employee in the database using Prisma
      const result = await prisma.employee.delete({
        where: {id},
        
      });
  
      // Return a success response with the created employee data
      return NextResponse.json(result, { status: 201 });
    } catch (error) {
      // Return a failure response with the error message
      return NextResponse.json({ error: "Failed to create employee", details: error.message }, { status: 500 });
    }
  }




  export default async function handler(req, res) {
    const { id } = req.query; // Get the ID from the URL
  
    if (req.method === 'GET') {
      try {
        // Fetch the employee by ID using Prisma
        const employee = await prisma.employee.findUnique({
          where: {
            id: parseInt(id), // Assuming `id` is an integer in the database
          },
        });
  
        if (!employee) {
          return res.status(404).json({ error: "Employee not found" });
        }
  
        return res.status(200).json(employee); // Send back the employee data
      } catch (error) {
        console.error("Error fetching employee:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }