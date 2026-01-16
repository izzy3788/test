import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { ButtonGroup } from "@/components/ui/button-group";

export default function UserTypeSelect() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#EDEEF1] pt-6">
      <div className="flex flex-1 flex-col justify-center mb-10">
        <div className="flex justify-center mb-6">
          <Image
            src="/image/cancel.svg"
            alt="Face Auth Failure Illustration"
            width={60}
            height={60}
          />
        </div>
        <h1 className="text-center text-[32px] font-bold text-[#2B2C36]">
          얼굴 인증 실패
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
      <ButtonGroup className="w-full">
        <Button
          size="lg"
          className="bg-[#474F5D] text-white w-1/2 hover:bg-[#3C434E]"
        >
          나가기
        </Button>
        <Button size="lg" className="w-1/2">
          재촬영하기
        </Button>
      </ButtonGroup>
    </div>
  );
}
