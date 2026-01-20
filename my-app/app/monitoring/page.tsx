"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  Settings,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ================= 배터리 상태 컴포넌트 ================= */
function BatteryStatus({ level }: { level: number }) {
  if (level > 60) {
    return (
      <div className="flex items-center gap-1 text-[#37B63C]">
        <BatteryFull className="h-4 w-4" />
      </div>
    );
  }

  if (level > 30) {
    return (
      <div className="flex items-center gap-1 text-yellow-400">
        <BatteryMedium className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 text-red-400">
      <BatteryLow className="h-4 w-4" />
    </div>
  );
}

export default function MonitoringPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#2B2C36] flex flex-col">
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 flex h-14 items-center px-4 text-white gap-2 bg-[#2B2C36]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <Image
              src="/image/Profile.svg"
              alt="default profile"
              fill
              sizes="100%"
              className="object-cover"
            />
          </AvatarFallback>
        </Avatar>

        <span className="font-bold">홍길동</span>

        <div className="ml-auto flex items-center gap-2">
          <Button
            size="sm"
            className="bg-[#363B44] border border-[#474F5D] hover:bg-[#4A5060]"
          >
            <LogOut className="mr-1 h-4 w-4" />
            모니터링 종료
          </Button>
          <Button
            size="sm"
            className="bg-[#363B44] border border-[#474F5D] hover:bg-[#4A5060]"
          >
            <Settings className="mr-1 h-4 w-4" />
            설정
          </Button>
        </div>
      </header>

      {/* ================= Monitoring Area ================= */}
      <main className="flex flex-1 bg-black">
        {/* 좌측 메인 카메라 */}
        <div className="relative w-1/2 border-r border-[#2E323C]">
          <Image
            src="/image/img_monitoring.png"
            alt="CAM1"
            fill
            className="object-cover"
            priority
          />

          {/* CAM1 라벨 */}
          <div className="absolute top-3 left-3 flex items-center gap-2 rounded-sm bg-black/60 px-2 py-2 text-sm text-[#D7DBE0] font-bold">
            <span className="h-2 w-2 rounded-full bg-[#37B63C]" />
            CAM1
            <BatteryStatus level={78} />
          </div>
        </div>

        {/* 우측 서브 카메라 */}
        <div className="relative w-1/2">
          <Image
            src="/image/img_monitoring.png"
            alt="CAM2"
            fill
            className="object-cover"
          />

          <div className="absolute top-3 left-3 flex items-center gap-2 rounded-sm bg-black/60 px-2 py-2 text-sm text-[#D7DBE0] font-bold">
            <span className="h-2 w-2 rounded-full bg-[#37B63C]" />
            CAM2
            <BatteryStatus level={42} />
          </div>
        </div>
      </main>

      {/* ================= Footer ================= */}
      <footer className="flex h-10 items-center justify-between bg-[#1F222B] px-4 text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-[#B3BBC6]">
            연결된 카메라:
            <span className="text-white">2대</span>
          </span>

          <span className="flex items-center gap-1 text-[#B3BBC6]">
            연결 상태:
            <span className="h-2 w-2 rounded-full bg-[#37B63C]" />
            <span className="text-[#37B63C]">양호</span>
          </span>
        </div>

        <div className="text-[#B3BBC6]">{time}</div>
      </footer>
    </div>
  );
}
