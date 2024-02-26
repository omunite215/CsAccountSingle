"use client";

import { DirectorsFormSchema } from "@/app/validationSchemas";
import ShareholdersData from "@/components/Forms/Data/ShareholdersData";
import { TooltipComponent } from "@/components/Tooltip";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import { useDataContext } from "@/context/ContextProvider";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Directors = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const { shareCapitalData } = useDataContext();

  const form = useForm<z.infer<typeof DirectorsFormSchema>>({
    resolver: zodResolver(DirectorsFormSchema),
    defaultValues: {
      type: "person",
      surname: null,
      name: undefined,
      idNo: undefined,
      address: undefined,
      email: undefined,
      phone: undefined,
      idProof: undefined,
      addressProof: undefined,
      classOfShares: "Ordinary",
      noOfShares: 1,
    },
  });

  const directorsRows = [
    {
      label: "Person/Company",
      for: "type",
    },
    {
      label: "Surname",
      for: "surname",
    },
    {
      label: "Name",
      for: "name",
    },
    {
      label: disable ? "Company No." : "ID No.",
      for: "idNo",
    },
    {
      label: "Address",
      for: "address",
    },
    {
      label: "Email",
      for: "email",
    },
    {
      label: "Phone",
      for: "phone",
    },
    {
      label: "Class of Shares",
      for: "classOfShares",
    },
    {
      label: "No. of Shares",
      for: "totalShares",
    },
  ];

  // Submit Handler.
  function onSubmit(values: z.infer<typeof DirectorsFormSchema>) {
    console.log("Backend is yet to be initialized");
  }
  useEffect(() => {
    const type = form.getValues("type");
    if (type === "company") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [form.getValues("type")]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Directors</CardTitle>
        <CardDescription>Please enter information on Directors</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <Table>
                <TableHeader>
                  <TableRow>
                    {directorsRows.slice(0, 5).map((row) => (
                      <TableHead
                        key={row.for}
                        className={cn({
                          hidden: disable && row.label === "Surname",
                        })}
                      >
                        <FormLabel
                          htmlFor={row.for}
                          className={cn({
                            "inline-flex items-center gap-3":
                              !disable && row.label === "Address",
                          })}
                        >
                          {row.label}
                          {!disable && row.label === "Address" && (
                            <TooltipComponent content="Address proof can be a bank letter or utility letter with the name and the address." />
                          )}
                        </FormLabel>
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
                    <TableCell
                      className={cn({
                        hidden: disable,
                      })}
                    >
                      <FormField
                        name="surname"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Surname Eg: Mar"
                                {...form.register("surname")}
                              />
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
                        name="idNo"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder={`${
                                  disable ? "Company" : "ID"
                                } No. Eg: S313XX31X`}
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
                        name="address"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Name Eg: No.1 Jianguomenwai Avenue"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      {disable && (
                        <FormField
                          name="idProof"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="File"
                                  placeholder="Upload a Copy"
                                  {...form.register("idProof")}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {!disable && (
                        <FormField
                          name="idProof"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="File"
                                  placeholder="Upload a Copy"
                                  {...form.register("idProof")}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {!disable && (
                        <FormField
                          name="addressProof"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="File"
                                  placeholder="Upload a Copy"
                                  {...form.register("addressProof")}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table>
                <TableHeader>
                  <TableRow>
                    {directorsRows.slice(5, 9).map((row) => (
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
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Eg: email1@gmail.com"
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
                        name="phone"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Eg: +86 XXX XXXX XXXX"
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
                                <SelectTrigger>
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
                                placeholder="Eg: 1000"
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
                  Save
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

export default Directors;
