export default function PocketNYC() {
  return (
    <div className="h-full sm:m-16 m-6 mt-16">
      <h1 className="text-center text-5xl font-bold mb-4 tracking-wide">
        Netflix Clone
      </h1>
      <p className="font-zidan text-[#6352ff] text-2xl tracking-widest
      md:text-3xl">
        TLDR;
      </p>
      <p className="ml-4 sm:ml-6 text-sm
      sm:text-md md:text-xl">
        {`I completed this Netflix clone as solo bootcamp project during my time at FullStack Academy. The goal of this project was to familiarize myself with front-end development, querying APIs, and implementing user authentication. Take a look at the video below for an  overview of the app!`}
      </p>
      <div className="mt-8 flex justify-center">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/NwqUgWcSoIg?si=9vc_Xeebnv0J82zt&hd=1"
          title="Netflix Clone - Video Player"
          frameborder=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
