"use client";

import { shareCapitalContent } from "@/lib/constants";
import { createContext, useContext, useState } from "react";
import { ContextProps, ShareCapitalProps } from "./Declarations";

const defaultValues = {
  shareCapitalData: shareCapitalContent,
  setShareCapitalData: () => {},
};

const DataContext = createContext<ContextProps>(defaultValues);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shareCapitalData, setShareCapitalData] =
    useState<ShareCapitalProps>(shareCapitalContent);
  return (
    <DataContext.Provider
      value={{
        shareCapitalData: shareCapitalData,
        setShareCapitalData: setShareCapitalData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
