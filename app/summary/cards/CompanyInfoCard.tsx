import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CompanyInfoCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Info</CardTitle>
        <CardDescription>
          Here are the details of your Company Info.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <p className="font-medium text-xl">Company Name (English):</p>
            <p className="text-lg">ComSec360</p>
          </div>
          <div className="flex items-center gap-3">
            <p className=" font-medium text-xl">Company Name (Chinese):</p>
            <p className=" text-lg">-</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <p className="font-medium text-xl">Type of Company:</p>
            <p className="text-lg">Private</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-medium text-xl">Nature of Business:</p>
            <p className="text-lg">Finance</p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Address Details:</h1>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">Flat / Floor / Block:</p>
              <p className="text-lg">Flat 25, 12/F</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">Building:</p>
              <p className="text-lg">Acacia Building</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">Street:</p>
              <p className="text-lg">150 Kennedy Road</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">District:</p>
              <p className="text-lg">WANCHAI</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">Country:</p>
              <p className="text-lg">Hong Kong</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-medium text-xl">Company E-mail:</p>
          <p className="text-lg">comsec360@gmail.com</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <p className="font-medium text-xl">Company Telephone :</p>
            <p className="text-lg">+852-1234-8456</p>
          </div>
          <div className="flex items-center gap-3">
            <p className=" font-medium text-xl">Company FaxNo:</p>
            <p className=" text-lg">-</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-medium text-xl">
            Time period of business administration fee:
          </p>
          <p className="text-lg">3 Years</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Presentor&lsquo;s Referance</CardTitle>
            <CardDescription>
              Here are the details of Presentor&lsquo;s Referance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <p className="font-medium text-xl">Name (English):</p>
                <p className="text-lg">James Bond</p>
              </div>
              <div className="flex items-center gap-3">
                <p className=" font-medium text-xl">Name (Chinese):</p>
                <p className=" text-lg">-</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">Address:</p>
              <p className="text-lg">
                10 Yi Pei Sq, Tsuen Wan District, HongKong
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <p className="font-medium text-xl">Company Telephone :</p>
                <p className="text-lg">+852-1234-8456</p>
              </div>
              <div className="flex items-center gap-3">
                <p className=" font-medium text-xl">Company FaxNo:</p>
                <p className=" text-lg">-</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-xl">E-mail:</p>
              <p className="text-lg">jamesb@gmail.com</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default CompanyInfoCard;
