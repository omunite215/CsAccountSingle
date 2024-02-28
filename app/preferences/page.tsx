import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SettingsPage = () => {
  return (
    <div className="md:container w-full py-6 md:px-0 px-6">
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            You can change your language settings from
            here
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-5">
          <Select defaultValue="en">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Language Preferences</SelectLabel>
                <SelectItem value="en">English (英语)</SelectItem>
                <SelectItem value="chi">Chinese (中国人)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Copyright © 2012 - 2024 ComSec360®. All rights reserved.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SettingsPage;
