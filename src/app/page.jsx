'use client'
import { useRouter } from 'next/navigation'



// pages/index.js
export default function Home() {
  const router = useRouter();
  return (
   
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 min-h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold">Makaryo</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#docs" className="hover:underline">Docs</a>
          <a href="#blogs" className="hover:underline">Blogs</a>
        </nav>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-blue-500 rounded-md hover:bg-gray-100"  onClick={() => router.push('/login')}>Log In</button>
          <button className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800"  onClick={() => router.push('/Signup')}>Create Account</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Improving HR Manager Workflow Radically</h2>
        <p className="text-lg mb-6">
          Transforming HR Processes with Innovative Solutions to Enhance Efficiency, Streamline Operations, 
          and Empower Your Team to Focus on Strategic Initiatives.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-white text-blue-500 rounded-md hover:bg-gray-100 font-semibold">
            Get Started Today
          </button>
          <button className="px-6 py-3 bg-blue-700 rounded-md hover:bg-blue-800 font-semibold">
            Try Demo Account
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-wrap justify-center gap-6 px-10 py-10">
        {/* Feature 1 */}
        <div className="bg-white text-blue-500 rounded-md shadow-md p-6 w-80">
          <h3 className="text-xl font-bold mb-2">Attendance Report</h3>
          <p>Real-time employee attendance report</p>
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p>Tracker:</p>
            <ul>
              <li>Today: 32 Employees</li>
              <li>Yesterday: 48 Employees</li>
              <li>Two Days Ago: 64 Employees</li>
            </ul>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white text-blue-500 rounded-md shadow-md p-6 w-80">
          <h3 className="text-xl font-bold mb-2">Company Performance</h3>
          <p>Monthly analyzed performance</p>
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p>Metrics:</p>
            <ul>
              <li>Investment</li>
              <li>Overperformance</li>
              <li>Salary</li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white text-blue-500 rounded-md shadow-md p-6 w-80">
          <h3 className="text-xl font-bold mb-2">Applicant Information</h3>
          <p>Manage applicant details effectively</p>
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p>Recruitment Progress:</p>
            <ul>
              <li>Applications Received</li>
              <li>Interviews Scheduled</li>
              <li>Offers Made</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="py-16 bg-white text-center">
  <h2 class="text-3xl font-bold mb-8">Transform Your Workforce With Our HR Platform</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
    <div class="p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Real-time data analyzing</h3>
      <p class="text-gray-600">Makaryo data analysis involves the immediate processing and evaluation of data as it is collected.</p>
    </div>
    <div class="p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Few Clicks to setup everything</h3>
      <p class="text-gray-600">From signing up your first account until running your first payroll in just a few clicks, it has never been this easy.</p>
    </div>
    <div class="p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Connect with all members</h3>
      <p class="text-gray-600">Connect with all of your employees, creating a good working ecosystem to enhance productivity.</p>
    </div>
    <div class="p-6 shadow-lg rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Various integration applications</h3>
      <p class="text-gray-600">Never let something block your HR activity. Makaryo helps you with thousands of integrations.</p>
    </div>
  </div>
</section>
<footer class="bg-gray-900 text-white py-16">
  <div class="text-center mb-8">
    <h3 class="text-2xl font-bold mb-4">Get started with Makaryo in just a few minutes, we promised</h3>
    <div class="space-x-4">
      <button class="px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700">Try Demo Account</button>
      <button class="px-6 py-3 bg-green-600 rounded-md text-white hover:bg-green-700">Start Using Makaryo</button>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center md:text-left">
    <div>
      <h4 class="text-lg font-semibold mb-4">Products</h4>
      <ul class="space-y-2">
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Product Overview</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Omni-channel sourcing</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Compliance & Contracting</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Payments</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Data & Reporting</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Pricing</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-lg font-semibold mb-4">Company</h4>
      <ul class="space-y-2">
        <li><a href="#" class="text-gray-400 hover:text-gray-200">About Us</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Partner Program</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Our Story</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Careers</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Customer Support</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-lg font-semibold mb-4">Resources</h4>
      <ul class="space-y-2">
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Get Help</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">FAQ</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">ROI Calculator</a></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-200">Status</a></li>
      </ul>
    </div>
  </div>
</footer>


    </div>
    
  );
}
