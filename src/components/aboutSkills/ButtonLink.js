import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import "animate.css";

export default function ButtonLink() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      <div className="items-center text-center lg:pt-4 scale-110 lg:scale-125" ref={ref}>
        <Link href="/transferable-skills">
          {isInView && (
            <button
              className={` rounded-full bg-gray-800 text-white shadow-md  shadow-[#6352ff]/40 p-1 px-2 ${"animate__animated animate__headShake"}  sm:text-sm text-[.55rem] `}
              ref={ref}
            >
              Checkout my non-technical portfolio and transferable skills here!
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
