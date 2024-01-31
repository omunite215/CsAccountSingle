import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    projectName: "Incorporation",
    status: "Starting",
    startDate: "1-Nov-2023",
    endDate: "29-Dec-2023",
    processedBy: "Username",
    publishedDocuments: 5
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    projectName: "Annual Return",
    status: "In-Processing",
    startDate: "28-sep-2023",
    endDate: "29-Dec-2023",
    processedBy: "Username",
    publishedDocuments: 5
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    projectName: "Annual Return",
    status: "In-Processing",
    startDate: "29-sep-2023",
    endDate: "29-Dec-2023",
    processedBy: "Username",
    publishedDocuments: 5
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    projectName: "Incorporation",
    status: "Completed",
    startDate: "21-nov-2023",
    endDate: "29-Dec-2023",
    processedBy: "Username",
    publishedDocuments: 5
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    projectName: "Annual Return",
    status: "Starting",
    startDate: "22-nov-2023",
    endDate: "29-Dec-2023",
    processedBy: "Username",
    publishedDocuments: 5
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 mt pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Projects
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base flex gap-1 items-center justify-center">
              Companies
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base flex gap-1 items-center justify-center">
              Project Name
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base flex gap-1 items-center justify-center">
              Status
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Start Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              End Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Published Documents
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Processed by
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-7 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.projectName}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p
                className={`font-medium ${
                  brand.status === "Starting"
                    ? "text-danger"
                    : brand.status === "In-Processing"
                    ? "text-warning"
                    : "text-success"
                }`}
              >
                {brand.status}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-success font-medium">{brand.startDate}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-danger font-medium">{brand.endDate}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-3 font-medium">{brand.publishedDocuments}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-warning font-medium">{brand.processedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
