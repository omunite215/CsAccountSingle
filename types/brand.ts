export type BRAND = {
  logo: string;
  name: string;
  projectName: string;
  status: "Starting" | "In-Processing" | "Completed";
  startDate: string;
  endDate: string;
  processedBy: string;
  publishedDocuments: number;
};
export type COMPANY = {
  logo: string;
  name: string;
  inCorporated: string;
  nextAnnualReturn: string;
  projectsInProcessing: number;
  financialDate: string;
}