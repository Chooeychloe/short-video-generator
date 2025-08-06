"use client";

import { useAuthContext } from "@/app/provider";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Gem, HomeIcon, LucideFileVideo, Search, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Create New Video",
    url: "/create-new-video",
    icon: LucideFileVideo,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: Search,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: Wallet,
  },
];

export function AppSidebar() {
  const path = usePathname();
    const {user} = useAuthContext();
  
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
          <div className="flex items-center gap-3 w-full justify-center mt-5">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
            <h2 className="font-bold text-2xl">Video Generator</h2>
          </div>
          <h2 className="text-lg text-gray-700 text-center mt-3">
            Reels and Short Video Generator
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="mx-5 mt-10">
              <Button className="w-full">Create New Video</Button>
            </div>
            <SidebarMenu>
              {MenuItems.map((menu, index) => (
                <SidebarMenuItem key={index} className="mt-3 mx-3">
                  <SidebarMenuButton
                    isActive={path == menu.url}
                    className="p-5"
                  >
                    <Link
                      href={menu.url}
                      className="flex items-center gap-4 p-3"
                    >
                      <menu.icon />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-5 border rounded-lg mb-6 bg-gray-800">
          <div className="flex items-center justify-between text-white">
            <Gem />
            <h2>{user?.credits} Credits Left</h2>
          </div>
          <Button className="w-full mt-3">Buy more credits</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
