"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PasswordPage() {
  const [password, setPassword] = useState("");

  const MAX_LENGTH = 4;

  const handleNumberClick = (num: string) => {
    if (password.length >= MAX_LENGTH) return;
    setPassword((prev) => prev + num);
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setPassword("");
  };

  return (
    <div className="relative min-h-screen bg-[#EDEEF1]">
      {/* 중앙 정렬 영역 (가로 + 세로) */}
      <div className="flex min-h-screen justify-center items-center pb-8">
        <div className="flex gap-40 max-w-275 w-full justify-center">
          {/* 좌측: 안내 + 비밀번호 */}
          <div>
            <h1 className="text-[24px] font-bold text-[#2B2C36] -mt-12 mb-3">
              암호 4자리를 입력해 주세요
            </h1>

            <div className="flex gap-3">
              {Array.from({ length: MAX_LENGTH }).map((_, index) => (
                <div
                  key={index}
                  className={`
                    h-25 w-20 rounded-lg
                    flex items-center justify-center
                    text-white text-2xl font-bold
                    ${
                      password.length > index
                        ? "bg-[#474F5D]"
                        : "bg-white border border-[#D7DBE0]"
                    }
                  `}
                >
                  {password.length > index && "*"}
                </div>
              ))}
            </div>
          </div>

          {/* 우측: 키패드 */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                variant="outline"
                className="h-25 w-32 text-[28px] font-semibold"
                onClick={() => handleNumberClick(String(num))}
              >
                {num}
              </Button>
            ))}

            <Button
              variant="outline"
              className="h-25 w-32 text-[28px] text-[#9AA1AC] hover:text-[#9AA1AC]"
              onClick={handleReset}
            >
              C
            </Button>

            <Button
              variant="outline"
              className="h-25 w-32 text-[28px] font-semibold"
              onClick={() => handleNumberClick("0")}
            >
              0
            </Button>

            <Button
              variant="outline"
              className="h-25 w-32 text-[28px]"
              onClick={handleDelete}
            >
              <Image
                src="/image/ic_delete.svg"
                alt="운전자 아이콘"
                width={27}
                height={27}
                priority
              />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="lg"
        className="
          fixed bottom-0 left-0 w-full
          rounded-none bg-[#474F5D]
          text-white hover:bg-[#3C434E] z-50
        "
      >
        나가기
      </Button>
    </div>
  );
}
