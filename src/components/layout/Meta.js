import React from "react";
import Head from "next/head";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = "Breana Johnson";
const defaultDescription =
  "Breana Johnson is a full-stack software engineer and UX/UI enthusiast.";

function Meta({ title = "Developer and Designer", description }) {
  const titleText = [name, title].filter(Boolean).join(" | ");
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="author" content="Breana Johnson" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
