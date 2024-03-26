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
import { CheckCircle2, SquarePen } from "lucide-react";

export default function Home() {
  const {
    tabValue,
    setTabValue,
    disableSI,
    setDisableSI,
    disableDirectors,
    setDisableDirectors,
    disableCS,
    setDisableCS,
  } = useDataContext();
  useEffect(() => {
    setTabValue(tabValue);
    setDisableSI(disableSI);
    setDisableDirectors(disableDirectors);
    setDisableCS(disableCS);
  }, [
    tabValue,
    setTabValue,
    disableCS,
    setDisableCS,
    disableDirectors,
    setDisableDirectors,
    disableSI,
    setDisableSI,
  ]);

  return (
    <main className="py-6">
      <Popup />
      <Tabs defaultValue="CI" value={tabValue}>
        <TabsList className="grid w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-40">
          <TabsTrigger
            value="CI"
            onClick={() => setTabValue("CI")}
            className="space-x-2"
          >
            <span>Company Info</span>
            <span>
              {tabValue === "CI" ? (
                <SquarePen size={20} />
              ) : (
                <CheckCircle2 size={20} color="green" />
              )}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="SI"
            disabled={disableSI}
            onClick={() => (disableSI ? setTabValue("CI") : setTabValue("SI"))}
            className="space-x-2"
          >
            <span>Shares Info</span>
            <span>
              {tabValue === "D" ||
              tabValue === "CS" ||
              (disableDirectors === false && tabValue === "CI") ? (
                <CheckCircle2 size={20} color="green" />
              ) : (
                <SquarePen size={20} />
              )}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="D"
            disabled={disableDirectors}
            onClick={() =>
              disableDirectors === false
                ? setTabValue("D")
                : setTabValue(tabValue)
            }
            className="space-x-2"
          >
            <span>Directors</span>
            <span>
              {tabValue === "CS" ||
              (disableDirectors === false && tabValue === "CI") ? (
                <CheckCircle2 size={20} color="green" />
              ) : (
                <SquarePen size={20} />
              )}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="CS"
            disabled={disableCS}
            onClick={() =>
              disableCS ? setTabValue(tabValue) : setTabValue("CS")
            }
          >
            Company Secretary
          </TabsTrigger>
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
