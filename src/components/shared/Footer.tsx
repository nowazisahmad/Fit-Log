import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between footer sm:footer-horizontal bg-base-200 shadow-sm container mx-auto items-center p-4">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="Fit Log Logo" className="h-5 w-5" />
        <span className="text-green-300 text-2xl font-semibold ">FITLOG</span>
      </div>
      <div>
        <p className="text-sm font-normal"><span>&copy;</span> 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;
