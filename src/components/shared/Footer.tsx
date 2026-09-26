import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between footer sm:footer-horizontal bg-base-200 shadow-sm container mx-auto items-center p-4">
      <div className="flex gap-2 items-center">
        <Image
          src={logo}
          alt="Fit Log Logo"
          className="h-4 w-4 lg:h-7 lg:w-7 object-contain"
        />
        <span className="text-green-300 font-semibold text-lg lg:text-2xl whitespace-nowrap">
          FITLOG
        </span>
      </div>
      <p className="text-xs md:text-sm text-center sm:text-right mt-2 sm:mt-0">
        &copy; 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
};

export default Footer;