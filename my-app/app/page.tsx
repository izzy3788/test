import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function UserTypeSelect() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <h1 className="mb-8 text-center text-[28px] font-semibold">
          사용자 유형을 선택해 주세요
        </h1>

        <RadioGroup className="grid grid-cols-2 gap-4">
          <label>
            <RadioGroupItem value="driver" className="peer hidden" />
            <Card className="relative cursor-pointer peer-checked:border-purple-500 peer-checked:bg-purple-50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Image
                  src="/images/type-1.png"
                  alt="운전자 아이콘"
                  width={128}
                  height={128}
                  className="rounded-md"
                  unoptimized
                />
                <div className="text-center">
                  <p className="font-semibold">운전자</p>
                  <p className="text-sm text-muted-foreground">
                    중장비를 실시간으로 모니터링합니다
                  </p>
                </div>
              </CardContent>
            </Card>
          </label>

          <label>
            <RadioGroupItem value="admin" className="peer hidden" />
            <Card className="relative cursor-pointer peer-checked:border-purple-500 peer-checked:bg-purple-50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="h-32 w-32 bg-gray-200 rounded-md" />
                <div className="text-center">
                  <p className="font-semibold">관리자</p>
                  <p className="text-sm text-muted-foreground">
                    사용자 및 중장비를 관리합니다
                  </p>
                </div>
              </CardContent>

              <div className="absolute right-4 top-4 hidden h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white peer-checked:flex">
                <Check size={14} />
              </div>
            </Card>
          </label>
        </RadioGroup>
      </div>

      <Button size="lg" variant="default" className="w-full rounded-none">
        다음
      </Button>
    </div>
  );
}
