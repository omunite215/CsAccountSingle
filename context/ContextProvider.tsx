"use client";

import { createContext, useContext, useState } from "react";
import type { ContextProps } from "./Declarations";


const defaultValues = {
  
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
  const [tabValue, setTabValue] = useState<"CI" | "SI" | "D" | "CS">("CI");
  const [disableSI, setDisableSI] = useState(true);
  const [disableDirectors, setDisableDirectors] = useState(true);
  const [disableCS, setDisableCS] = useState(true);

  return (
    <DataContext.Provider
      value={{
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
