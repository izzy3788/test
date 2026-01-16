import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Lottie from "lottie-react";
import faceScanAnimation from "@/lottie/face-scan.json";

export default function UserTypeSelect() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#3C434E] pt-6">
      <div className="flex flex-1 flex-col justify-center mb-10">
        <div className="flex justify-center mb-6">
          <Lottie animationData={faceScanAnimation} loop={true} />
        </div>
        <h1 className="text-center text-[32px] font-bold text-[#FFFFFF]">
          정면을 응시해 주세요.
        </h1>
        <span className="mt-2 text-center text-[16px] text-[#474F5D]">
          얼굴 인증에 실패하였습니다.
          <br />
          재촬영 하시거나 아래의 보조 인증을 진행해 주세요.
        </span>
      </div>
      <Button variant="link" className="text-[#474F5D] mb-4 text-[18px]">
        계속 인증에 실패하신다면?
        <ChevronRight className="size-4.5 text-[#474F5D]" />
      </Button>
    </div>
  );
}
