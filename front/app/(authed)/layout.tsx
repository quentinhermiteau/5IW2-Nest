"use client";

import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AuthedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Header />
      <main className="px-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
