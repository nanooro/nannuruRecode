"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <motion.div
      className="w-full bg-white flex justify-start items-center p-2"
      id="header"
    >
      <Link href="/">
        <h1 className="text-4xl font-bold">Nannuru.com</h1>
      </Link>
      <div className="ml-auto" id="hamMenuIcon">
        <AnimatePresence mode="wait">
          {isHamMenuOpen ? (
            <CrossIco key="cross" setIsHamMenuOpen={setIsHamMenuOpen} />
          ) : (
            <HamBurIco key="ham" setIsHamMenuOpen={setIsHamMenuOpen} />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{isHamMenuOpen && <NavBar />}</AnimatePresence>
    </motion.div>
  );
}

function HamBurIco({ setIsHamMenuOpen }) {
  return (
    <motion.div onClick={() => setIsHamMenuOpen(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

function CrossIco({ setIsHamMenuOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setIsHamMenuOpen(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M6 6l12 12M6 18L18 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="z-0 p-2 flex w-full -ml-2 justify-center gap-5 items-center bg-white absolute mt-[81px]"
      id="navBarDiv"
    >
      <Link href="/">
        <button className="inline-flex items-center justify-center font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg p-2">
          Home
        </button>
      </Link>
      <Link href="/articles">
        <button className="inline-flex items-center justify-center font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg p-2">
          Articles
        </button>
      </Link>
    </motion.div>
  );
}
