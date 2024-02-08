"use client";
import { CompanyInfoFormSchema } from "@/app/validationSchemas";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

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
        <CardTitle>Company Info / 公司信息</CardTitle>
        <CardDescription>
          Enter Info about Company / 输入有关公司的信息
        </CardDescription>
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
                    <Input placeholder="date" {...field} />
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
                      <Input placeholder="incorporated" {...field} />
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
                      <Input placeholder="Annual Return Date" {...field} />
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
                        <Input
                          {...(control.register(
                            `bankDetails.${index}.bankName`
                          ),
                          { required: false })}
                        />
                      </TableCell>
                      <Controller
                        render={({ field }) => (
                          <TableCell>
                            <Input {...field} />
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
              <Button
                onClick={() =>
                  append({
                    bankAcc: "",
                    bankName: "",
                  })
                }
              >
                Add field
              </Button>
            </div>
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail:</FormLabel>
                  <FormControl>
                    <Input placeholder="info@test1.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                name="companyTel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Telephone:</FormLabel>
                    <FormControl>
                      <Input placeholder="+852-1234-5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="companyFax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Fax No:</FormLabel>
                    <FormControl>
                      <Input placeholder="+852-1234-5678" {...field} />
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
