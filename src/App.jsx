import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "motion/react";
import { Cursor } from "./components/Cursor";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen cursor-none gap-y-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: .5  }} // Adjust this value to control the speed
          className="text-8xl font-extrabold text-center"
        >
          BIG BOLD LETTER FOR IMPACT
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1  }} // Adjust this value to control the speed
          className="text-2xl font-bold text-center"
        >
           Small bold letter for less impact
          </motion.h1>
          <motion.Button>THIS</motion.Button>
        <Cursor></Cursor>
      </div>
    </>
  );
}

export default App;
