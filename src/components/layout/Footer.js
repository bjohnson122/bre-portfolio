import React from "react";
// import styles from "./Layout.module.css";

function Footer() {
  return (
    <footer className='text-center p-5'>
      © {new Date().getFullYear()} &middot; Built with Black Girl Magic by
      Breana J.
    </footer>
  );
}

export default Footer;
