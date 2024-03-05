"use client";
import {
  CompanyInfo,
  CompanySecretary,
  ShareCapital,
} from "@/components/Forms";
import { DirectorsMain, ShareHoldersMain } from "@/components/Main";
import { Popup } from "@/components/Popup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDataContext } from "@/context/ContextProvider";
import { useEffect } from "react";

export default function Home() {
  const { tabValue, setTabValue } = useDataContext();

  useEffect(() => {
    setTabValue;
  }, [tabValue]);
  
  
  return (
    <main className="md:container w-full py-6 md:px-0 px-6">
      <Popup />
      <Tabs defaultValue="CI">
        <TabsList className="grid w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-40">
          <TabsTrigger value="CI">Company Info</TabsTrigger>
          <TabsTrigger value="SI">Shares Info</TabsTrigger>
          <TabsTrigger value="D">Directors</TabsTrigger>
          <TabsTrigger value="CS">Company Secretary</TabsTrigger>
        </TabsList>
        <TabsContent value="CI">
          <CompanyInfo />
        </TabsContent>
        <TabsContent value="SI" className="space-y-3">
          <ShareCapital />
          <ShareHoldersMain />
        </TabsContent>
        <TabsContent value="D">
          <DirectorsMain />
        </TabsContent>
        <TabsContent value="CS">
          <CompanySecretary />
        </TabsContent>
      </Tabs>
      <p className="mt-4">
        Copyright © 2012 - 2024 ComSec360®. All rights reserved.
      </p>
    </main>
  );
}
