import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block " href="/">
              <span className="text-white font-bold text-xl ">
                Information Visualization
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-white transition hover:bg-white hover:text-black px-4 py-3 rounded-md"
                    href="/"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:bg-white hover:text-black px-4 py-3 rounded-md ease-in"
                    href="#Experiments"
                  >
                    Experiments
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button className="bg-white hover:bg-white">
                <FiGithub className="mr-2 h-4 w-4 bg-white text-black" />{" "}
                <span className="text-black bg-white">Follow</span>
              </Button>
            </div>

            <div className="block md:hidden">
              <DropdownMenu className="bg-[#1c1c1c]">
                <DropdownMenuTrigger className="text-white rounded border px-4 py-2">
                  Open
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[##1c1c1c] text-white">
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuItem>Experiments</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
