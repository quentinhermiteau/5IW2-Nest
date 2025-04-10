"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export default function Header() {
  const handleLogout = () => {
    window.localStorage.removeItem("token");
  };
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={handleLogout} variant="ghost" className="w-full">
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
