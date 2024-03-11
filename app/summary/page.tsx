import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  CompanyInfoCard,
  CompanySecretaryCard,
  DirectorsCard,
  ShareCapitalCard,
  ShareholderCard,
} from "./cards";

const page = () => {
  return (
    <div className="flex flex-1 justify-center">
      <Card className="container my-6">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
          <CardDescription>Please Review your details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CompanyInfoCard />
          <ShareCapitalCard />
          <ShareholderCard />
          <DirectorsCard />
          <CompanySecretaryCard />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link
            className={buttonVariants({ className: "cursor-pointer" })}
            href="/"
          >
            Edit
          </Link>
          <Link
            className={buttonVariants({
              variant: "destructive",
              className: "cursor-pointer",
            })}
            href="/done"
          >
            Confirm
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
