import Link from "next/link";

export default function Employee_Page() {
    return (
      <div className="flex h-screen">
        <main className="flex-1 p-6">
          <div className="flex justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Employee</h2>
              <p className="text-gray-600 text-sm">Manage your employee</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              + Add Employee
            </button>
          </div>
  
          <div className="flex space-x-4 border-b mb-6">
            <Link
              href="/sidebar/manage"
              className="pb-3 border-b-2 border-transparent hover:border-blue-600"
            >
              Manage Employees
            </Link>
            
            <Link
              href="/sidebar/flight"
              className="pb-3 border-b-2 border-transparent hover:border-blue-600"
            >
              Request Time Off
            </Link>
          </div>
  
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Organization Chart</h3>
  
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 px-4 py-3 rounded shadow-md">
                  <p className="font-semibold">Cameron Williamson</p>
                  <p className="text-gray-500 text-sm">Founder - CEO</p>
                </div>
              </div>
  
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded">
                    Business and Marketing
                  </div>
                  <div className="mt-3 space-y-3">
                    <div className="bg-gray-100 p-3 rounded shadow">
                      Leslie Alexander <br />
                      <span className="text-sm text-gray-500">
                        Head of Project Manager
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded shadow">
                      Cody Firmansyah <br />
                      <span className="text-sm text-gray-500">
                        Senior Project Manager
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded shadow">
                      Jenni William <br />
                      <span className="text-sm text-gray-500">Project Manager</span>
                    </div>
                  </div>
                </div>
  
                <div className="text-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded">Design</div>
                  <div className="mt-3 space-y-3">
                    <div className="bg-gray-100 p-3 rounded shadow">
                      Brooklyn Simmons <br />
                      <span className="text-sm text-gray-500">
                        Creative Director
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  