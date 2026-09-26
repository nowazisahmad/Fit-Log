import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-extrabold text-black mb-3">
        404
      </h1>
      <h2 className="text-xl font-bold uppercase text-white mb-2">
        PAGE NOT FOUND
      </h2>
      <Link href="/" className="bg-green-300 text-slate-900 font-bold text-xs uppercase px-5 py-3 rounded-lg">
        Go to Home
      </Link>
    </div>
  );
}
export default NotFound;