"use client"
import Link from "next/link";

export default function Sidebar()
{
    return(
        <aside className="w-64 bg-white border-r shadow-md">
        <div className="p-5 border-b">
          <h1 className="text-2xl font-bold text-blue-600 mb-1">BordUp™</h1>
          <p className="text-sm text-gray-500">Rocks Company</p>
        </div>

        <nav className="mt-6">
          <ul>
            
            <li className="p-3 hover: text-blue-600 hover:bg-gray-100 mt-20">
              <Link href="/sidebar/manage" className="flex items-center">
                <span className="mr-3">👤</span> Employee
              </Link>
            </li>
            <li className="p-3 hover:bg-gray-100 hover: text-blue-600 mt-20">
              <Link href="/sidebar/projects" className="flex items-center">
                <span className="mr-3">📝</span> Projects
              </Link>
            </li>
            <li className="p-3 hover:bg-gray-100 hover: text-blue-600 mt-20">
              <Link href="/login" className="flex items-center">
                <span className="mr-3">📝</span> Logout
              </Link>
            </li>
            
          </ul>

          

          
          
        </nav>
      </aside>
    );
}