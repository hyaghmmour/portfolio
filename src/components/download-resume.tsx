'use client';

import confetti from "canvas-confetti";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { saveAs } from "file-saver";

export function DownloadResume() {
  const downloadPdf = () => {
    const pdfUrl = 'https://rxresu.me/hyaghmmour/resume';  // The path to the PDF in the public folder

    // Initiating file download
    return fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'Hamza_Yaghmmour_Resume.pdf');  // Save the file using file-saver
        return Promise.resolve();  // Return a resolved promise once the download starts
      })
      .catch((error) => {
        console.error('Error fetching the PDF:', error);
        return Promise.reject(error);  // Return a rejected promise if there's an error
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

  return (
    <div className="relative">
      <RainbowButton
        onClick={async () => {
          const l = handleConfetti();  // Start the confetti after 3 seconds
          console.log({l})
          // Adding a timeout to simulate file download completion
          setTimeout(async () => {
            await downloadPdf();  // Wait for the file download to start
          }, 2000);  // Adjust the delay based on an estimated file download time
        }}
      >
        Resume
      </RainbowButton>
    </div>
  );
}