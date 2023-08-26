import { AreaChart, FileText, ScatterChart } from "lucide-react";

export default function Experiments() {
  return (
    <section className="bg-gray-900 text-white" id="Experiments">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto  max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Experiments</h2>

          <p className="mt-4 text-gray-300">
            Below is a list of all the experiments I conducted during the
            duration of this course.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-gray-500/10 hover:shadow-gray-500/10"
            href="https://drive.google.com/file/d/1ou8F-VRTKaJ7q7ajhlTd88i3TN2bpyC1/view?usp=sharing"
            target="_blank"
          >
            <FileText className="h-10 w-10 text-blue-400" />
            <h2 className="mt-4 text-xl font-bold text-white">
              Exp1 - Abstract
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              An Abstract was written on the topic of "Indian Unemployment
              Report", Where we studied and researched about the unemployment
              data collected by the government of India.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-gray-500/10 hover:shadow-gray-500/10"
            href="https://analytics.zoho.in/open-view/314561000000005154"
            target="_blank"
          >
            <AreaChart className="h-10 w-10 text-blue-400" />
            <h2 className="mt-4 text-xl font-bold text-white">
              Exp - 2 Data visualization
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              A simple daily life data was collected and visualized using Zoho
              analytics.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-gray-500/10 hover:shadow-gray-500/10"
            href="https://www.inspirajournals.com/uploads/Issues/1292159930.pdf"
          >
            <ScatterChart className="h-10 w-10 text-blue-400" />
            <h2 className="mt-4 text-xl font-bold text-white">
              Exp - 3 Research Paper Related to Abstract
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              The research paper chosen by me which is related to my chosen
              project is "AN ANALYSIS ON UNEMPLOYMENT IN INDIA: A BURNING ISSUE"
              by Dr. Abhishek Chaturvedi.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
