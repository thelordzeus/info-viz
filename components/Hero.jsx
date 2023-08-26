import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="ml-4 max-w-xl text-left">
          <h1 className="text-3xl  sm:text-5xl font-title text-white">
            Arnav Shukla
          </h1>
          <h1 className="text-xl  sm:text-4xl font-title text-white">
            RA2111050010001
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">Section Z1</p>

          <div className="mt-8 flex flex-wrap justify-left gap-4">
            <Button variant="outline" className="bg-[#1c1c1c] text-white">
              Tableau
            </Button>
            <Button className="bg-white text-black transition hover:text-white hover:bg-[#1c1c1c]">
              Abstract
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}