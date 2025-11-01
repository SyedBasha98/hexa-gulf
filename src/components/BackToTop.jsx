import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Alias motion elements (so ESLint sees real variable usage)
const MotionDiv = motion.div;

export default function FloatingCtas(){
  const waHref = "https://wa.me/966123456789?text=Hello%20Hexagulf%2C%20I%20need%20a%20quote.";
  return (
    <MotionDiv
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 50 }}
    >
      <div style={{ margin: "0 auto 14px", maxWidth: "72rem", padding: "10px 14px" }}>
        <div
          className="card"
          style={{
            display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between",
            padding: "10px 14px", borderRadius: 14
          }}
        >
          <div style={{ fontWeight: 900 }}>Need help or a fast quote?</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <MessageCircle size={18}/> WhatsApp
            </a>
            <Link
              to="/contact#quote"
              className="btn btn-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Phone size={18}/> Request Quote
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
