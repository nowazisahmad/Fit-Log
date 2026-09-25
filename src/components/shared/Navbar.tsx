"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { WorkoutsContext } from "@/context/workoutcontext";


const Navbar = () => {
  const pathname = usePathname();
  const {
    todaysPlane,
    saveForLater,
  } = useContext(WorkoutsContext);
  return (
    <div className="navbar bg-base-200 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <li>
            <Link href="/" className={pathname === "/" ? "text-blue-500" : ""}>Home</Link>
          </li>
            <li>
              <Link href="/workouts" className={pathname === "/workouts" ? "text-blue-500" : ""}>Workout</Link>
            </li>
            <li>
              <Link href="/My-Plan" className={pathname === "/My-Plan" ? "text-blue-500" : ""}>My Plan</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="Fit Log Logo" />
          <span className="text-green-300 text-3xl font-bold ">FITLOG</span>
        </div>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className={pathname === "/" ? "text-blue-500" : ""}>Home</Link>
          </li>
          <li>
            <Link href="/workouts" className={pathname === "/workouts" ? "text-blue-500" : ""}>Workout</Link>
          </li>
          <li>
            <Link href="/My-Plan" className={pathname === "/My-Plan" ? "text-blue-500" : ""}>My Plan</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn">Plan<span className="border rounded-[50%] text-slate-900 bg-green-300 px-[10px]">{todaysPlane?.length ?? 0}</span></button>
        <button className="btn">Saved<span className="border rounded-[50%] px-[10px]">{saveForLater?.length ?? 0}</span></button>
      </div>
    </div>
  );
};

export default Navbar;
