"use client";

import { shareCapitalContent } from "@/lib/constants";
import { createContext, useContext, useState } from "react";
import { ContextProps, ShareCapitalProps } from "./Declarations";

const defaultValues = {
  shareCapitalData: shareCapitalContent,
  setShareCapitalData: () => {},
  tabValue: "CI" as "CI" | "SI" | "D" | "CS",
  setTabValue: () => {}
};

const DataContext = createContext<ContextProps>(defaultValues);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shareCapitalData, setShareCapitalData] =
    useState<ShareCapitalProps>(shareCapitalContent);

  const [tabValue, setTabValue] = useState<"CI" | "SI" | "D" | "CS">("CI");

  return (
    <DataContext.Provider
      value={{
        shareCapitalData: shareCapitalData,
        setShareCapitalData: setShareCapitalData,
        tabValue: tabValue,
        setTabValue: setTabValue
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
