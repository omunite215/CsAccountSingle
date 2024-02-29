"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { InviteGuestUsers, Shareholders } from "@/components/Forms";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { buttonVariants } from "../ui/button";
import ShareholdersData from "../Forms/Data/ShareholdersData";

const ShareHoldersMain = () => {
  const [value, setValue] = useState<"self" | "invite">("self");
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <Card>
        <div className="flex flex-1 justify-between items-center">
          <CardHeader>
            <CardTitle>Shareholders</CardTitle>
            <CardDescription>
              Here are the details on Shareholders
            </CardDescription>
          </CardHeader>
          <CollapsibleTrigger type="button" className="pr-6">
            <span className={buttonVariants({ variant: "outline" })}>
              {isOpen ? "-" : "+"}
            </span>
          </CollapsibleTrigger>
        </div>
        <CardContent className="space-y-6">
          <CollapsibleContent className="CollapsibleContent">
            <ShareholdersData />
          </CollapsibleContent>
          <RadioGroup defaultValue="self">
            <div
              className="flex items-center space-x-2 py-6"
              onClick={() => setValue("self")}
            >
              <RadioGroupItem value="self" id="r1" checked={value === "self"} />
              <Label htmlFor="r1" className=" text-2xl">
                Fill in all the information for this Shareholder
              </Label>
            </div>
            <div
              className={cn({
                hidden: value === "invite",
              })}
            >
              <Shareholders />
            </div>
            <div
              className="flex items-center space-x-2 py-6"
              onClick={() => setValue("invite")}
            >
              <RadioGroupItem
                value="invite"
                id="r2"
                checked={value === "invite"}
              />
              <Label htmlFor="r2" className="text-2xl">
                Invite a Shareholder to fill in the details.
              </Label>
            </div>
            <div
              className={cn({
                hidden: value === "self",
              })}
            >
              <InviteGuestUsers text="Shareholder" />
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </Collapsible>
  );
};

export default ShareHoldersMain;
