"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, {useEffect} from "react";
import { AppSidebar } from "./_components/AppSidebar";
import WelcomeContainer from "./dashboard/_components/WelcomeContainer";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { useUser } from "../provider";

function DashboardProvider({ children }) {
  const { user, setUser } = useUser();
  const router = useRouter();

  return (
    <SidebarProvider>
      <AppSidebar/>
      <div className="w-full p-10">
        {/* <SidebarTrigger/> */}
        <WelcomeContainer/>
        {children}
    </div>
    </SidebarProvider>
  );
}
export default DashboardProvider;
