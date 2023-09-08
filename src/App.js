import React, { useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleButtonClick = () => {
    setShowMainContent(true);
  };

  return (
    <div className="page-container">
      <AnimatePresence>
        {!showMainContent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.5 }}
            className="landing-page"
          >
            <div className="center-button">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={handleButtonClick}
                className="cool-button"
              >
                Enter
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Tom Court: Software Engineer
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              My Projects
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Contact Me
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
