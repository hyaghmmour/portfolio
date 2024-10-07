"use client";

import confetti from "canvas-confetti";
import { RainbowButton } from "@/components/ui/rainbow-button";
import saveAs from "file-saver";

import { useEffect, useState } from "react";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

export function AnimatedCircularProgressBarDemo({ max }: { max: number }) {
  const [value, setValue] = useState(0);
  const [int, setInt] = useState(1); 

  

  useEffect(() => {
    const totalDuration = 2000; // Total duration in milliseconds (2 seconds)
    const updateInterval = 100; // Frequency of updates in milliseconds
    const steps = totalDuration / updateInterval; // Total steps
    const increment = max / steps; // Increment value per step

    const interval = setInterval(() => {
      const x = Math.round(((int / steps) * 100) )
      setValue(x);  // Ensure whole numbers
      console.log({value})

      if ((increment * int) >= max) {
        clearInterval(interval);  // Stop once it reaches the max
        setValue(100);  // Ensure it doesn't exceed the max
      }

    setInt((_x) => _x + 1); 

    }, updateInterval);


    return () => clearInterval(interval); // Clean up interval
  }, [max, int]);

  return (
    <div style={{
      width: '100vw', 
      height: 'auto', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      maxHeight: '150px !important',
    }}>
      <AnimatedCircularProgressBar
      className="loading"
        max={100} // Maximum value set to 100
        min={0}
        value={Math.floor(value)}
        gaugePrimaryColor="#000000" // Black primary color
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
}

export function DownloadResume() {
  const [loading, setLoading] = useState(false);


  // const downloadPdf = () => {
  const downloadPdf = () => {
    const pdfUrl =
      "https://storage.rxresu.me/cm1xvq6vx2iwimtv5et9ke33a/resumes/Hamza_Yaghmmour_Resume.pdf";

    fetch(pdfUrl, { mode: "no-cors" }).then(() => {
      window.location.href = pdfUrl;
    });
  };

 

  const handleConfetti = () => {
    const duration = 5 * 1000; // Duration of confetti animation in milliseconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  if (loading) {
    return (
      <div className="relative">
        <AnimatedCircularProgressBarDemo max={2} />
      </div>
    );
  } else {
    return (
      <div className="relative">
        <RainbowButton
          onClick={async () => {
            setLoading((_val) => true);
            const l = handleConfetti(); // Start the confetti after 3 seconds
            // Adding a timeout to simulate file download completion

            setTimeout(async () => {
              await downloadPdf(); // Wait for the file download to start
              setLoading((_val) => false);
            }, 3000); // Adjust the delay based on an estimated file download time
          }}
        >
          Resume
        </RainbowButton>
      </div>
    );
  }
}
