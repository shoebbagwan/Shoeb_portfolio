"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Signature hero element: an animated signal waveform.
 * Ties together the two threads of the work shown on this site —
 * audio/speech signal processing (Vocal Metrics) and language-model
 * "signal" retrieval (the RAG chatbot) — rendered as one continuous line.
 */
export default function SignalWave() {
  const reduceMotion = useReducedMotion();

  const path =
    "M0,60 C 40,60 50,20 80,20 C 110,20 120,90 150,90 C 180,90 190,10 220,10 C 250,10 260,100 290,100 C 320,100 330,30 360,30 C 390,30 400,70 430,70 C 460,70 470,45 500,45 C 530,45 540,60 580,60 C 620,60 630,15 660,15 C 700,15 710,95 750,95 C 790,95 800,40 840,40 C 880,40 890,60 930,60 C 970,60 985,60 1000,60";

  return (
    <svg
      viewBox="0 0 1000 120"
      className="w-full h-auto"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4c7eff" stopOpacity="0" />
          <stop offset="12%" stopColor="#4c7eff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8fb0ff" stopOpacity="1" />
          <stop offset="88%" stopColor="#4c7eff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4c7eff" stopOpacity="0" />
        </linearGradient>
        <filter id="waveGlow" x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* faint static baseline for depth */}
      <path
        d={path}
        fill="none"
        stroke="#1b2331"
        strokeWidth="1"
        transform="translate(0, 4)"
      />

      <motion.path
        d={path}
        fill="none"
        stroke="url(#waveFade)"
        strokeWidth="1.75"
        strokeLinecap="round"
        filter="url(#waveGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {!reduceMotion && (
        <motion.path
          d={path}
          fill="none"
          stroke="url(#waveFade)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.35}
          animate={{ y: [0, -3, 0, 3, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
      )}
    </svg>
  );
}
