"use client";

// import Image from "next/image";
// import cao_logo from "../public/cao-logo.png";
// import dcg_logo from "../public/dcg-logo.jpg";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      

      <div className="h-svh">
        <div className="flex flex-col gap-16 px-16 py-32">
          <div className="flex flex-row gap-4 items-center">
            {/* <Image src={dcg_logo} alt="" width={100} height={100} />
            <Image src={cao_logo} alt="" width={100} height={100} /> */}

            <img src="./dcg-logo.jpg" alt="" width={100} height={100} />
            <img src="./cao-logo.png" alt="" width={100} height={100} />

            <div>
              <div className="text-xl font-normal">
                The Official Website of the
              </div>
              <div className="text-4xl font-bold">
                OFFICE OF THE CITY ACCOUNTANT
              </div>
              <div className="text-base font-light">
                Davao City, Philippines
              </div>
            </div>
          </div>

          <div className="space-x-4">
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>

            <Button asChild>
              <Link href="/services">Check Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
