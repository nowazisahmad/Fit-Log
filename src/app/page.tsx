import Banner from "@/components/homepage/Banner";
import Fitlog from "@/components/homepage/Workout";

export default function Home() {
  return (
    <div className="container mx-auto py-4">
      <Banner/>
      <Fitlog/>
    </div>
  );
}
