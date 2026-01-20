"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const users = [
  { id: 1, name: "홍길동", team: "생산 1팀", image: "/image/user1.jpg" },
  { id: 2, name: "홍길동", team: "생산 2팀", image: "/image/user2.jpg" },
  { id: 3, name: "홍길동", team: "생산 3팀", image: "/image/user3.jpg" },
  { id: 4, name: "홍길동", team: "생산 4팀", image: "/image/user4.jpg" },
  { id: 5, name: "홍길동", team: "생산 4팀", image: "/image/user4.jpg" },
];

export default function UserTypeSelect() {
  return (
    <div className="min-h-screen bg-[#EDEEF1]">
      {/* 헤더 및 검색창 */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[#2B2C36] text-[24px] font-bold text-center mt-18 -mb-2">
          사용자 이름을 검색해 주세요
        </h1>

        <InputGroup className="w-120">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* 유저 리스트 */}
      <div className="px-10 mt-16 pb-24 max-w-300 mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {users.map((user) => (
            <Card key={user.id} className="rounded-xl">
              <CardContent className="flex flex-col items-center pt-2">
                <Avatar className="h-30 w-30">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="relative">
                    <Image
                      src="/image/profile.svg"
                      alt="default profile"
                      fill
                      className="object-cover rounded-full"
                    />
                  </AvatarFallback>
                </Avatar>

                <p className="mt-5 text-[18px] font-bold text-[#2B2C36]">
                  {user.name}
                </p>
                <p className="pt-1 text-sm text-[#6C7A8B]">{user.team}</p>
              </CardContent>

              <CardFooter>
                <Button
                  variant="secondary"
                  className="w-full bg-[#F9F5FF] text-[#6F3BF2] hover:bg-[#EDE0FF]"
                >
                  선택하기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Button
        size="lg"
        className="
          fixed
          bottom-0
          left-0
          w-full
          rounded-none
          bg-[#474F5D]
          text-white
          hover:bg-[#3C434E]
          z-50
        "
      >
        나가기
      </Button>
    </div>
  );
}
