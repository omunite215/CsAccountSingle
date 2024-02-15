"use client";

import { CompanyInfoFormSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CompanyInfo = () => {
  const date = new Date().toDateString();
  const form = useForm<z.infer<typeof CompanyInfoFormSchema>>({
    resolver: zodResolver(CompanyInfoFormSchema),
    defaultValues: {
      date: date,
      name: "",
      incorporated: date,
      annual: date,
      address: "",
      bankDetails: [{ bankName: "HSBC", bankAcc: "1234" }],
      email: "",
      companyTel: "",
      companyfax: "",
    },
  });
  const control = form.control;
  const { fields, append, remove } = useFieldArray({
    name: "bankDetails",
    control,
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof CompanyInfoFormSchema>) {
    console.log("Backend is yet to be initilialized");
  }

  useEffect(() => {
    remove(1);
  }, [remove]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Info</CardTitle>
        <CardDescription>Enter Info about Company</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Date:</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name (English):</FormLabel>
                    <FormControl>
                      <Input placeholder="company name (English)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chiname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name (Chinese):</FormLabel>
                    <FormControl>
                      <Input placeholder="company name (Chinese)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="incorporated"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Incorporated Date:</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="incorporated"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annual"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Return Date:</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Annual Return Date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hong Kong Address Only..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Label htmlFor="bankName">Bank Name</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="bankAcc">Bank Account No.</Label>
                    </TableHead>
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <FormControl>
                          <Input
                            {...(control.register(
                              `bankDetails.${index}.bankName`
                            ),
                            { required: false })}
                          />
                        </FormControl>
                      </TableCell>
                      <Controller
                        render={({ field }) => (
                          <TableCell>
                            <FormControl>
                              <Input {...field} type="number" />
                            </FormControl>
                          </TableCell>
                        )}
                        name={`bankDetails.${index}.bankAcc`}
                      />
                      <TableCell>
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => remove(index)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <span className={buttonVariants()}
                onClick={() =>
                  append({
                    bankAcc: "",
                    bankName: "",
                  })
                }
              >
                Add field
              </span>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="info@test1.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="companyTel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Telephone:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+852-1234-5678"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyfax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Fax No:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+852-1234-5678"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CompanyInfo;
