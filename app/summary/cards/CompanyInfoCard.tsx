import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CompanyInfoCard = () => {
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" *:my-2">
        <Image
            src="/logo/tencent.png"
            width={58}
            height={58}
            alt="logo"
            className="object-contain"
          />
          <span>Tencent Games Pvt. Ltd.</span>
        </CardTitle>
        <CardDescription>
          Here are the details of your Company Info.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
      <div className="flex items-center gap-3">
            <p className="font-medium text-base">
              Business Registration Number:
            </p>
            <p className="text-base">S313XXXX</p>
          </div>
      <div className="grid grid-cols-2 gap-3">
        
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">
              Incorporate Date:
            </p>
            <p className="text-base">17/04/2024</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">
              Financial Date:
            </p>
            <p className="text-base">-</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">Company Name (English):</p>
            <p className="text-base">Tencent Games Pvt Ltd.</p>
          </div>
          <div className="flex items-center gap-3">
            <p className=" font-medium text-base">Company Name (Chinese):</p>
            <p className=" text-base">腾讯游戏</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">Type of Company:</p>
            <p className="text-base">Private</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">Nature of Business:</p>
            <p className="text-base">Finance</p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-medium">Address Details:</h1>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">Flat / Floor / Block:</p>
              <p className="text-base">Flat 25, 12/F</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">Building:</p>
              <p className="text-base">Acacia Building</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">Street:</p>
              <p className="text-base">150 Kennedy Road</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">District:</p>
              <p className="text-base">Wanchai</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">Country:</p>
              <p className="text-base">Hong Kong</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-medium text-base">Company E-mail:</p>
          <p className="text-base">comsec360@gmail.com</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">Company Telephone :</p>
            <p className="text-base">+852-1234-8456</p>
          </div>
          <div className="flex items-center gap-3">
            <p className=" font-medium text-base">Company FaxNo:</p>
            <p className=" text-base">-</p>
          </div>
        </div>
        
          <div className="flex items-center gap-3">
            <p className="font-medium text-base">
              Time period of business administration fee:
            </p>
            <p className="text-base">3 Years</p>
          </div>
          
        
       

        <Card>
          <CardHeader>
            <CardTitle>Presentor&rsquo;s Referance</CardTitle>
            <CardDescription>
              Here are the details of Presentor&lsquo;s Referance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <p className="font-medium text-base">Name (English):</p>
                <p className="text-base">James Bond</p>
              </div>
              <div className="flex items-center gap-3">
                <p className=" font-medium text-base">Name (Chinese):</p>
                <p className=" text-base">-</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">Address:</p>
              <p className="text-base">
                10 Yi Pei Sq, Tsuen Wan District, HongKong
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <p className="font-medium text-base">Company Telephone :</p>
                <p className="text-base">+852-1234-8456</p>
              </div>
              <div className="flex items-center gap-3">
                <p className=" font-medium text-base">Company FaxNo:</p>
                <p className=" text-base">-</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-base">E-mail:</p>
              <p className="text-base">jamesb@gmail.com</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default CompanyInfoCard;
