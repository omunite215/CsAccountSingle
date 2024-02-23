"use client";

import { ShareCapitalFormSchema } from "@/app/validationSchemas";
import ShareCapitalData from "@/components/Forms/Data/ShareCapitalData";
import { useToast } from "@/components/ui/use-toast";
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
import { useDataContext } from "@/context/ContextProvider";
import { currencyContent, shareCapitalRows } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "../ui/button";
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

const ShareCapital = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const { shareCapitalData, setShareCapitalData } = useDataContext();
  const form = useForm<z.infer<typeof ShareCapitalFormSchema>>({
    resolver: zodResolver(ShareCapitalFormSchema),
    defaultValues: {
      class: "Ordinary",
      totalProposed: 10000.0,
      currency: "HKD",
      unitPrice: 1.0,
      total: 10000.0,
      paid: 10000.0,
      unpaid: 0,
      rightsAttached: "",
    },
  });

  const handleTotalSharesChange = (value: number) => {
    const currentValue = form.getValues("unitPrice");
    const totalAmount = value * currentValue;
    form.setValue("total", totalAmount);
  };

  const handleValueChange = (value: number) => {
    const currentShares = form.getValues("totalProposed");
    const totalAmount = currentShares * value;
    form.setValue("total", totalAmount);
  };

  const handlePaidChange = (value: number) => {
    const totalAmount = form.getValues("total");
    form.setValue("unpaid", totalAmount - value);
  };
  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareCapitalFormSchema>) {
    const newId = Math.max(...shareCapitalData.map((entry) => entry.id), 0) + 1;
    const newValues = {
      id: newId,
      ...values,
    };
    shareCapitalData.push(newValues);
    setShareCapitalData(shareCapitalData);
    toast({
      title: "Success!!",
      description: "Field has been Added Successfully!!",
    });
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
                    {shareCapitalRows.map((row) => (
                      <TableHead key={row.for}>
                        <FormLabel htmlFor={row.for}>{row.label}</FormLabel>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <FormField
                        name="class"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              placeholder="Eg: Ordinary, Preferance..."
                              type="text"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        name="totalProposed"
                        control={form.control}
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
                        name="currency"
                        control={form.control}
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
                        name="unitPrice"
                        control={form.control}
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
                        name="total"
                        control={form.control}
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
                        name="paid"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  handlePaidChange(Number(e.target.value));
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
                        name="unpaid"
                        control={form.control}
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
                        name="rightsAttached"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              placeholder="Voting Rights, etc..."
                              type="text"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 my-4">
                  <Button type="submit">Save</Button>
                </div>
                <CollapsibleTrigger type="button" className="hidden">
                  <span className={buttonVariants({ variant: "outline" })}>
                    {isOpen ? "Show Less" : "Show More"}
                  </span>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <ShareCapitalData />
              </CollapsibleContent>
            </form>
          </Form>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default ShareCapital;
