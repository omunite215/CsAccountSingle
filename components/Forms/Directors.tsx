"use client";

import { directorsSchema } from "@/app/validationSchemas";
import DirectorsData from "@/components/Forms/Data/DirectorsData";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { directorsRows } from "@/lib/constants";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const Directors = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof directorsSchema>>({
    resolver: zodResolver(directorsSchema),
    defaultValues: {
      type: "person",
      surname: "",
      name: "",
      email: "",
    },
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof directorsSchema>) {
    console.log("Backend is yet to be initialized");
  }

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
                    {directorsRows.map((row) => (
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
                <DirectorsData />
              </CollapsibleContent>
            </form>
          </Form>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default Directors;
