import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Alias motion elements (so ESLint sees real variable usage)
const MotionButton = motion.button;

export default function BackToTop(){
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <MotionButton
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", right: 20, bottom: 78, zIndex: 60,
        background: "linear-gradient(180deg,#f8e7a1,#d4af37 60%,#b98c1d)",
        color: "#111", border: "1px solid rgba(185,140,29,.6)", borderRadius: 14,
        padding: "10px 14px", fontWeight: 900, boxShadow: "0 12px 28px rgba(212,175,55,.35)"
      }}
      aria-label="Back to top"
    >
      Top
    </MotionButton>
  );
}
