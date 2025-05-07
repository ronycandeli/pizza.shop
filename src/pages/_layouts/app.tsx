import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
    <div>
        <h1>cabeçalho</h1>
    </div>
    <div>
        <Outlet />
    </div>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2025 My App</p>
      </footer>
    </>
  )
}