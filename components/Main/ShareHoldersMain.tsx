"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { InviteGuestUsers, Shareholders } from "@/components/Forms";

const ShareHoldersMain = () => {
  const [value, setValue] = useState<"self" | "invite">("self");

  return (
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
        <RadioGroupItem value="invite" id="r2" checked={value === "invite"} />
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
  );
};

export default ShareHoldersMain;
