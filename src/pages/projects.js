import React from "react";
import Project from "@/components/Work/PortfolioProjects";
import PortfolioProjects from "@/components/Work/PortfolioProjects";

export default function Projects() {
  return (
    <div id="projects" className="bg-white">
      {/* <PortfolioProjects /> */}
      <div class="relative">
        <div class="sticky top-0 h-screen bg-red-500 flex justify-center items-center">
            <div>
                <h1 class="text-4xl">First section Scroll</h1>
            <p class="text-2xl">Page scroll down</p>
            </div>
        </div>
        <div class="sticky top-0 h-screen bg-indigo-500 flex justify-center items-center">
            <div>
                <h1 class="text-4xl">Second section Scroll</h1>
            <p class="text-2xl">Page scroll down</p>
            </div>
        </div>

        <div class="sticky top-0 h-screen bg-green-500 flex justify-center items-center">
            <div>
                <h1 class="text-4xl">Third section Scroll</h1>
            <p class="text-2xl">Page scroll down</p>
            </div>
        </div>

        <div class="sticky top-0 h-screen bg-blue-500 flex justify-center items-center">
            <div>
                <h1 class="text-4xl">Fourth section Scroll</h1>
            <p class="text-2xl">Page scroll down</p>
            </div>
        </div>
    </div>
     
      
    </div>
  );
}
