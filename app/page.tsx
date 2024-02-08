import {
  CompanyInfo,
  ShareCapital,
  ShareParticulars,
  Shareholders,
  Directors,
  CompanySecretary,
} from "@/components/Forms";
import { CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="md:container w-full py-6 md:px-0 px-6">
      <Tabs defaultValue="CI">
        <TabsList className="grid w-full md:grid-cols-5 sm:grid-cols-3 grid-cols-1 sm:mb-0 mb-40">
          <TabsTrigger value="CI">Company Info</TabsTrigger>
          <TabsTrigger value="SC">Share Capital</TabsTrigger>
          <TabsTrigger value="S">Shareholders</TabsTrigger>
          <TabsTrigger value="D">Directors</TabsTrigger>
          <TabsTrigger value="CS">Company Secretary</TabsTrigger>
        </TabsList>
        <TabsContent value="CI">
          <CompanyInfo />
        </TabsContent>
        <TabsContent value="SC">
          <ShareCapital />
          <ShareParticulars />
        </TabsContent>
        <TabsContent value="S">
          <Shareholders />
        </TabsContent>
        <TabsContent value="D">
          <Directors />
        </TabsContent>
        <TabsContent value="CS">
          <CompanySecretary />
        </TabsContent>
      </Tabs>
      <CardDescription className="mt-4">
        Copyright © 2012 - 2024 ComSec360®. All rights reserved.
      </CardDescription>
    </main>
  );
}
