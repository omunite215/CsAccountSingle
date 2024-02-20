"use client";

import { ShareholdersFormSchema } from "@/app/validationSchemas";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDataContext } from "@/context/ContextProvider";
import { shareholdersRows } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Shareholders = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { shareCapitalData } = useDataContext();

  const form = useForm<z.infer<typeof ShareholdersFormSchema>>({
    resolver: zodResolver(ShareholdersFormSchema),
    defaultValues: {
      type: "person",
      surname: "",
      name: "",
      email: "",
      classOfShares: "Ordinary",
      noOfShares: 1,
    },
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareholdersFormSchema>) {
    console.log("Backend is yet to be initialized");
  }

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
                    {shareholdersRows.map((row) => (
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
                        name="type"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex justify-start items-center gap-10"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="person" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Person
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="company" />
                                  </FormControl>
                                  <Label className="font-normal">Company</Label>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        name="surname"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Surname Eg: Mar" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Name Eg: Curtis" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Name Eg: email1@gmail.com"
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
                        name="classOfShares"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Class of Shares" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Class of Shares</SelectLabel>
                                    {shareCapitalData.map((item) => (
                                      <SelectItem
                                        key={item.id}
                                        value={item.class}
                                      >
                                        <div className="flex gap-3">
                                          <span className="font-medium">
                                            {item.class}
                                          </span>
                                          <span className="font-light">
                                            {item.unpaid}
                                          </span>
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        name="noOfShares"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Name Eg: 1000"
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
                  <span className={buttonVariants({ variant: "outline" })}>
                    {isOpen ? "Show Less" : "Show More"}
                  </span>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <ShareholdersData />
              </CollapsibleContent>
            </form>
          </Form>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default Shareholders;
