"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import faceScanAnimation from "@/lottie/face-scan.json";

export default function UserTypeSelect() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#EDEEF1] pt-6">
      <Button variant="outline" size="sm" className="rounded-full">
        <Image
          src="/image/handle.svg"
          alt="핸들 아이콘"
          width={16}
          height={16}
          priority
        />
        <span className="text-[16px] text-[#474F5D] font-bold">운전자</span>
        <ChevronRight className=" h-4 w-4 text-[#474F5D]" />
      </Button>
      <div className="flex flex-1 flex-col justify-center mb-10">
        <h1 className="text-center text-[32px] font-bold text-[#2B2C36]">
          안전을 위한 얼굴 인증이 필요합니다.
        </h1>
        <span className="mt-2 text-center text-[16px] text-[#474F5D]">
          등록된 운전자만 운행할 수 있습니다.
        </span>
        <Lottie
          animationData={faceScanAnimation}
          loop
          autoplay
          className="h-64 w-64 items-center mx-auto"
        />
      </div>
      <Button variant="link" className="text-[#474F5D] mb-4 text-[18px]">
        계속 인증에 실패하신다면?
        <ChevronRight className="size-4.5 text-[#474F5D]" />
      </Button>
      <Button size="lg" className="w-full rounded-none">
        시작하기
      </Button>
    </div>
  );
}
