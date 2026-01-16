"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Lottie from "lottie-react";
import faceCaptureAnimation from "@/lottie/face_capture.json";

export default function UserTypeSelect() {
  const [count, setCount] = useState(3);
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => setCountdownFinished(true), 0);
      return () => clearTimeout(finishTimer);
    }
  }, [count]);

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-[#2A2E35]">
      <Button
        variant="outline"
        size="icon"
        aria-label="Go Back"
        className="absolute right-5 top-5 z-50 h-10 w-10 border-0 bg-[#474F5D] text-white hover:bg-[#6C7A8B] hover:text-white"
      >
        <X className="size-6" />
      </Button>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-center text-[32px] font-bold text-white -mb-20">
          정면을 응시해 주세요.
        </h1>

        <div className="relative h-150 w-150">
          <Lottie
            animationData={faceCaptureAnimation}
            loop
            className="h-full w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-75 w-75 rounded-full border-2 border-white/70" />
          </div>

          {!countdownFinished && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[80px] font-semibold text-white drop-shadow-lg">
                {count}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 flex w-full flex-col items-center gap-2">
        <h2 className="text-[18px] font-bold text-[#D7DBE0]">
          얼굴인식 준비중
        </h2>
        <span className="text-[52px] font-bold text-white">0%</span>
      </div>
    </div>
  );
}
