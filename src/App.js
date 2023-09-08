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
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tom Court: Software Engineer
            </motion.h1>
            <div className="center-button">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleButtonClick}
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
            <h1>Tom Court: Software Engineer</h1>
            <h2>About Me</h2>
            <h2>My Projects</h2>
            <h2>Contact Me</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
