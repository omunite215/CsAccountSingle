"use client";

import { ShareholdersFormSchema } from "@/app/validationSchemas";
import { classOfSharesContent, currencyContent } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import DummyShareholders from "./_components/DummyShareholders";

const Shareholders = () => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date().toDateString();
  const form = useForm<z.infer<typeof ShareholdersFormSchema>>({
    resolver: zodResolver(ShareholdersFormSchema),
    defaultValues: {
      name: "",
      chiname: "",
      start: date,
      end: date,
      classOfShares: "ordinary",
      totalNumber: 0,
      currency: "",
      totalAmount: 0,
      shareCertiNo: "",
    },
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareholdersFormSchema>) {
    console.log("Backend is yet to be initialized");
  }

  const [amountOfShares, setAmountOfShares] = useState(800);
  const handleSelectChange = (selectedValue: string) => {
    switch (selectedValue) {
      case "ordinary":
        setAmountOfShares(900);
        break;
      case "preferance":
        setAmountOfShares(800);
        break;

      default:
        setAmountOfShares(0);
        break;
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shareholders</CardTitle>
        <CardDescription>
          Please enter information on Shareholders
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
                      <Label htmlFor="name">Name</Label>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="chiname">Name(Chinese)</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="start">Start Date</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="end">End Date</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="classOfShares">
                        Class of Shares
                      </FormLabel>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
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
                              type="date"
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
                      name="end"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="date"
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
                    <HoverCard>
                      <HoverCardTrigger>
                        <FormField
                          control={form.control}
                          name="classOfShares"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={() => {
                                  field.onChange;
                                  handleSelectChange;
                                }}
                                defaultValue="ordinary"
                                {...field}
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
                                      key={item.value}
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
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex justify-start items-center">
                          <h1>
                            Total Shares UnAllocated:&nbsp;
                            {amountOfShares}
                          </h1>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableBody>
              </Table>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <FormLabel htmlFor="totalNumber">Total Number</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="currency">Currency</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="totalAmount">Total Amount</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="shareCertiNo">
                        Share Certificate No.
                      </FormLabel>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableCell>
                    <FormField
                      control={form.control}
                      name="totalNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
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
                                <SelectItem value={item} key={item}>
                                  {item}
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
                      name="totalAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
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
                      name="shareCertiNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="ShareID-XXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                </TableBody>
              </Table>
              <div className="flex justify-between items-center">
                <Button type="submit" className="my-4">
                  Submit
                </Button>
                <CollapsibleTrigger className="ml-auto">
                  <span className={buttonVariants({ variant: "outline" })}>
                    {isOpen ? "Show Less" : "Show More"}
                  </span>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <DummyShareholders />
              </CollapsibleContent>
            </form>
          </Form>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default Shareholders;
