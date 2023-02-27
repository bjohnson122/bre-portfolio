import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import "animate.css";

export default function ButtonLink() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      <div className="items-center text-center pt-4" ref={ref}>
        <Link href="/transferable-skills">
          {isInView && (
            <button
              className={` rounded-full bg-gray-800 text-white p-1 px-2 ${"animate__animated animate__headShake"} xs:text-xs sm:text-sm text-[.55rem]`}
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
