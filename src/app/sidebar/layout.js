import Sidebar from "./components/Sidebar";

export default function WithSidebarLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        {children} {/* Render the page's content */}
      </div>
    </div>
  );
}
