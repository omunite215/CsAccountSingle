import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const SuccessPage = () => {
  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle className="text-green-600 flex items-center">
          <Image
            src="/success/done.gif"
            width={56}
            height={56}
            alt="done"
            className="object-contain"
          />
          Success!!
        </CardTitle>
        <CardDescription>
          Your Details have been submitted successfully.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="/success/success.jpg"
          width={400}
          height={400}
          alt="success"
          priority
          className="object-contain"
        />
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button variant="destructive">
          Download PDF <Download size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SuccessPage;
