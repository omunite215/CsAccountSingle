"use client";

import { ShareCapitalFormSchema } from "@/app/validationSchemas";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { classOfSharesContent, currencyContent } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import DummyShareCapital from "./_components/DummyShareCapital";

const ShareCapital = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof ShareCapitalFormSchema>>({
    resolver: zodResolver(ShareCapitalFormSchema),
    defaultValues: {
      class: "",
      totalIssued: 0,
      currency: "",
      totalSubscribed: 0,
      paid: 0,
      unpaid: 0,
    },
  });

  const handleTotalSharesChange = (value: number) => {
    const currentValue = form.getValues("totalSubscribed");
    const totalAmount = value * currentValue;
    form.setValue("paid", totalAmount);
  };

  const handleValueChange = (value: number) => {
    const currentShares = form.getValues("totalIssued");
    const totalAmount = currentShares * value;
    form.setValue("paid", totalAmount);
  };

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareCapitalFormSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Capital</CardTitle>
        <CardDescription>
          Please enter information on Share Capital
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <FormLabel htmlFor="class">Class of Shares</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="totalIssued">
                        Total Shares Proposed
                      </FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="currency">Currency</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="totalSubscribed">
                        Total Capital Subscribed
                      </FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="paid">
                        Total Amount (Paid Up)
                      </FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="unpaid">
                        Total Amount (Unpaid)
                      </FormLabel>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name="class"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue="ordinary"
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a Class of Shares" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {classOfSharesContent.map((item) => (
                                  <SelectItem
                                    value={item.value}
                                    key={item.label}
                                  >
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
                        name="totalIssued"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="XXXX"
                                type="number"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  handleTotalSharesChange(
                                    Number(e.target.value)
                                  );
                                }}
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
                        name="currency"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue="HKD"
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a Currency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {currencyContent.map((item) => (
                                  <SelectItem value={item} key={item}>{item}</SelectItem>
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
                        name="totalSubscribed"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="XXXX"
                                type="number"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  handleValueChange(Number(e.target.value));
                                }}
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
                        name="paid"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                readOnly
                                placeholder="XXXX"
                                type="number"
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
                        name="unpaid"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                readOnly
                                placeholder="XXXX"
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
                <CollapsibleTrigger className="ml-auto" type="button">
                  <Button variant="outline">
                    {isOpen ? "Show Less" : "Show More"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <DummyShareCapital />
              </CollapsibleContent>
            </form>
          </Form>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default ShareCapital;
