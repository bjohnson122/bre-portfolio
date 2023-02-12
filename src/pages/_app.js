import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Loader from "@/components/loader/Loader";
import React, { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


// import Hero3d from '../components/Hero3d'
// import * as THREE from 'three';
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from '@react-three/drei';

const repoPrompt = `
───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█

Taking a peek huh? Check out the source code: https://github.com/bjohnson122/bre-portfolio
`;
 
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = router.pathname;

  const Spline = React.lazy(() => import('@splinetool/react-spline'));



  const loaderFadeAnimation = {
    key: "loader fade",
    initial: { opacity: 1 },
    animate: { opacity: [1, 0, 0] },
    transition: { delay: 3.8, duration: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    const loadDuration = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(loadDuration);
    };
  }, []);

  useEffect(() => {
    console.info(`${repoPrompt}\n\n`);
  }, []);

  return (
    <div>
      {loading && path === "/" && (
        <div>
          <AnimatePresence>
            <motion.div {...loaderFadeAnimation}>
              <Loader />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {!loading && (
        <div>
          <Suspense>
          <Layout>
            <Component className='h-screen w-screen' {...pageProps} />
          </Layout>
         </Suspense>
        </div>
      )}
    </div>
  );
}
