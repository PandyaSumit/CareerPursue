import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";


export const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="my-custom-class">
        <Header/>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">Developed 🎁 by Sumit Pandya</div>
    </div>
  );
};
