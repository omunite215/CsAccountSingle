"use client";
import { Directors, InviteGuestUsers } from "@/components/Forms";
import ShareholdersData from "@/components/Forms/Data/ShareholdersData";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDataContext } from "@/context/ContextProvider";
import { cn } from "@/lib/utils";
import { useState } from "react";

const DirectorsMain = () => {
  const { setTabValue } = useDataContext();
  const [value, setValue] = useState<"self" | "invite">("self");
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <Card>
        <div className="flex flex-1 justify-between items-center">
          <CardHeader>
            <CardTitle>Directors</CardTitle>
            <CardDescription>Here are the details on Directors</CardDescription>
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
                Fill in all the information for this Director
              </Label>
            </div>
            <div
              className={cn({
                hidden: value === "invite",
              })}
            >
              <Directors />
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
              <div className="flex justify-between items-center w-full">
                <Label htmlFor="r2" className="text-2xl">
                  Invite a Director to fill in the details.
                </Label>
                <Button variant="destructive" onClick={() => setTabValue("CS")}>
                  Save & Next
                </Button>
              </div>
            </div>
            <div
              className={cn({
                hidden: value === "self",
              })}
            >
              <InviteGuestUsers text="Director" />
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </Collapsible>
  );
};

export default DirectorsMain;
