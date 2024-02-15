"use client";

import { userSchema } from "@/app/validationSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { positionType } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import DummyCS from "./_components/DummyCS";
import { useState } from "react";

const CompanySecretary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date().toDateString();
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      type: "Person",
      name: "",
      chiname: "",
      start: date,
      end: date,
      idNo: "",
      companyNo: 0,
    },
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof userSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Secretary</CardTitle>
        <CardDescription>Please enter information on Directors</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Label htmlFor="type">Person/Body Corporate</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="name">Name</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="chiname">Name (Chinese)</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="start">Start Date</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="end">End Date</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="idNo">ID Card No. / Passport</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="companyNo">Company Number</Label>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue="person"
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Position Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {positionType.map((item) => (
                                  <SelectItem value={item.value} key={item.value}>
                                    {item.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="company name (English)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="chiname"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="company name (Chinese)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="start"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Start Date"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="end"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="End Date"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="idNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="ID Card / Number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="companyNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Company No."
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex justify-between items-center">
                <Button type="submit" className="my-4">
                  Submit
                </Button>
                <CollapsibleTrigger className="ml-auto">
                  <Button variant="outline">
                    {isOpen ? "Show Less" : "Show More"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <DummyCS />
              </CollapsibleContent>
            </form>
          </Form>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default CompanySecretary;
