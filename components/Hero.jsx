import { Button } from "@/components/ui/button";
import { AreaChart, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="" id="About">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center items-center">
        <div className="ml-4 max-w-xl text-left">
          <h1 className="text-3xl  sm:text-5xl font-title text-white">
            Arnav Shukla
          </h1>
          <h1 className="text-xl  sm:text-4xl font-title text-white">
            RA2111050010001
          </h1>
          <p className="text-gray-400 font-light text-justify mt-3">
            I&apos;m a Computer Science Undergrad - pursuing BTech CSE with
            specialization in Blockchain Technology - at SRM Institute of
            Science and Technology, KTR, also I&apos;m normal guy who happens to
            be a FrontEnd Engineer specializing in building exceptional
            products, websites, and everything in between
          </p>
        </div>
      </div>
    </section>
  );
}
