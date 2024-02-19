import { Dispatch, SetStateAction } from "react";

export type ShareCapitalProps = {
    
    class: string;
    totalProposed: number;
    currency: string;
    unitPrice: number;
    total: number;
    paid: number;
    unpaid: number;
    id: number;
}[];

export type ShareholdersProps = {

}

export type ContextProps = {
    shareCapitalData: ShareCapitalProps;
    setShareCapitalData: Dispatch<SetStateAction<ShareCapitalProps>>;
  };