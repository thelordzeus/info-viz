import Image from "next/image";

import Hero from "../components/Hero";
import Experiments from "@/components/Experiments";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Experiments />
    </main>
  );
}
