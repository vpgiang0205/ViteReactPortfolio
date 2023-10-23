import { Outlet } from "react-router-dom";

export default function PageContent() {
  return (
    <div className="flex-col justify-center flex h-screen">      
      <Outlet />
    </div>
  )
}

