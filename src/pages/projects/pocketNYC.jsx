import Image from "next/image";
import Schema from "public/pNYC/Schema.png";
import WireframeSample from "public/pNYC/Wireframe-sample-PNYC.png";
import pnycScreenshot from "/public/pNYC/PNYC-screenshot.png";



export default function PocketNYC() {
  return (
    <div className="h-full sm:m-16 m-6 mt-16">
      <h1 className="text-center text-5xl font-bold mb-4">PocketNYC</h1>
      <p className="font-zidan text-[#6352ff] text-2xl tracking-widest
      md:text-3xl">
        TLDR;{" "}
      </p>
      <p className="ml-4 sm:ml-6 text-sm
      sm:text-lg md:text-xl">
        {`Check out the 1-minute video below to get a quick overview of PocketNYC and its features, narrated by the creators. This user-friendly project includes a map, calendar, and a "favorites" section, all populated with real data from the NYC Open Data API.`}
      </p>
      <div className="mt-8 flex justify-center mb-16 embed-responsive aspect-ratio-16/9">
        <iframe
       
          src="https://www.youtube.com/embed/HM_qrBKRltw?si=zSj-zosMscgNs-x4&hd=1"
          title="PocketNYC - Video Player"
          frameborder=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* Schema */}
      <p className="text-center text-4xl font-zidan tracking-wider my-7 ">
        {`A "Behind the Scenes" Look:`}
      </p>
      <p className="text-[#6352ff] text-xl font-bold md:text-2xl">The Schema:</p>
      <p className="pl-2 mb-4 sm:text-lg md:text-xl ml-4">
        {
          "This schema was used to create associations in a SQL relational database. We leveraged PostgreSQL, Sequelize, NodeJS, and other back-end technologies to maintain data and enhance our user's experience."
        }
      </p>
      <Image src={Schema} alt="PocketNYC Schema" />
      {/* WireFrame */}
      <p className="text-center text-4xl font-zidan tracking-wider my-7">
        {`The Blueprint vs. the Final Build`}
      </p>
      <p className="text-[#6352ff] text-xl font-bold md:text-2xl">
        Mocking and Wireframes:
      </p>
      <p className="pl-2 mb-4 sm:text-lg md:text-xl ml-4">
        Our basic wireframe helped lay the groundwork for our overall design. We
        utilized MatieralUI, Bootstrap, and CSS to develop an app that has
        subtle hints of NYC on every page. I designed a logo that would reflect
        the app and give users the opportunity to easily identify PocketNYC.
      </p>
      <Image src={WireframeSample} alt="PocketNYC Wireframe Sample"/>
       <br />
      <Image
        src={pnycScreenshot}
        alt="Final Version of PocketNYC Screenshot"
      ></Image>
    </div>
  );
}
