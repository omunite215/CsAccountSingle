"use client";

import { shareCapitalContent } from "@/lib/constants";
import { createContext, useContext, useState } from "react";
import { ContextProps, ShareCapitalProps } from "./Declarations";

const defaultValues = {
  shareCapitalData: shareCapitalContent,
  setShareCapitalData: () => {},
  tabValue: "CI" as "CI" | "SI" | "D" | "CS",
  setTabValue: () => {},
  disableSI: true,
  setDisableSI: () => {},
  disableDirectors: true,
  setDisableDirectors: () => {},
  disableCS: true,
  setDisableCS: () => {},
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
  const [disableSI, setDisableSI] = useState(true);
  const [disableDirectors, setDisableDirectors] = useState(true);
  const [disableCS, setDisableCS] = useState(true);

  return (
    <DataContext.Provider
      value={{
        shareCapitalData: shareCapitalData,
        setShareCapitalData: setShareCapitalData,
        tabValue: tabValue,
        setTabValue: setTabValue,
        disableSI: disableSI,
        setDisableSI: setDisableSI,
        disableDirectors: disableDirectors,
        setDisableDirectors: setDisableDirectors,
        disableCS: disableCS,
        setDisableCS: setDisableCS,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
