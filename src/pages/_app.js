import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component
          className="h-screen w-screen"
          // bg-[#6352ff1a]
          {...pageProps}
        />
      </Layout>
      <Analytics />
    </div>
  );
}
