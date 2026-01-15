import { Button } from "@/components/ui/button";

export default function UserTypeSelect() {
  return (
    <div className="flex min-h-screen flex-col bg-[#EDEEF1]">
      <div className="flex-1" />

      {/* 하단 버튼 */}
      <Button size="lg" className="w-full rounded-none">
        시작하기
      </Button>
    </div>
  );
}
