import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hidden xl:block">
          XEROON.
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="bg-cyan-600 hover:bg-cyan-900 rounded">
              Hire me
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="xl:hidden">
        <div className="flex flex-col items-center">
          <Link href="/" className="text-xl font-bold mb-4">
            XEROON.
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
