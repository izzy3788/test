"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function UserTypeSelect() {
  const [userType, setUserType] = useState<"driver" | "admin" | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-[#EDEEF1]">
      <div className="flex flex-1 flex-col justify-center mb-10">
        <h1 className="mb-8 text-center text-[32px] font-bold text-[#2B2C36]">
          사용자 유형을 선택해 주세요
        </h1>

        <div className="container mx-auto">
          <RadioGroup
            value={userType ?? ""}
            onValueChange={(value) => setUserType(value as "driver" | "admin")}
            className="mx-auto grid max-w-180 grid-cols-2 gap-6"
          >
            {/* 운전자 */}
            <label className="cursor-pointer">
              <RadioGroupItem value="driver" className="hidden" />

              <Card
                className={cn(
                  "relative border-2 transition-all",
                  userType === "driver"
                    ? "border-[#6F3BF2] bg-[#F4F1FF]"
                    : "border-transparent bg-white"
                )}
              >
                <CardContent className="flex flex-col items-center gap-4 p-4">
                  <Image
                    src="/image/type-2.svg"
                    alt="운전자 아이콘"
                    width={240}
                    height={240}
                    priority
                  />

                  <div className="text-center">
                    <p className="text-2xl font-semibold text-[#2B2C36]">
                      운전자
                    </p>
                    <p className="pt-1.5 text-[16px] text-[#474F5D]">
                      중장비를 실시간으로 모니터링합니다
                    </p>
                  </div>
                </CardContent>

                {userType === "driver" && (
                  <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#6F3BF2] text-white">
                    <Check size={16} />
                  </div>
                )}
              </Card>
            </label>

            {/* 관리자 */}
            <label className="cursor-pointer">
              <RadioGroupItem value="admin" className="hidden" />

              <Card
                className={cn(
                  "relative border-2 transition-all",
                  userType === "admin"
                    ? "border-[#6F3BF2] bg-[#F4F1FF]"
                    : "border-transparent bg-white"
                )}
              >
                <CardContent className="flex flex-col items-center gap-4 p-4">
                  <Image
                    src="/image/type-1.svg"
                    alt="관리자 아이콘"
                    width={240}
                    height={240}
                    priority
                  />

                  <div className="text-center">
                    <p className="text-2xl font-semibold text-[#2B2C36]">
                      관리자
                    </p>
                    <p className="pt-1.5 text-[16px] text-[#474F5D]">
                      사용자 및 중장비를 관리합니다
                    </p>
                  </div>
                </CardContent>

                {userType === "admin" && (
                  <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#6F3BF2] text-white">
                    <Check size={16} />
                  </div>
                )}
              </Card>
            </label>
          </RadioGroup>
        </div>
      </div>

      {/* 하단 버튼 */}
      <Button size="lg" disabled={!userType} className="w-full rounded-none">
        다음
      </Button>
    </div>
  );
}
