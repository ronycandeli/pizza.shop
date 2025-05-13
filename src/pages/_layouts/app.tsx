import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
    <div className="flex flex-col antialiased">
        <Header />
    </div>
    <div className="flex min-h-screen flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
    </div>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2025 pizza.shop</p>
      </footer>
    </>
  )
}