"use client";

import { CompanySecretaryFormSchema } from "@/app/validationSchemas";
import { Form, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
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

const CompanySecretary = () => {
  const date = new Date().toDateString();
  const form = useForm<z.infer<typeof CompanySecretaryFormSchema>>({
    resolver: zodResolver(CompanySecretaryFormSchema),
    defaultValues: {
      companySecretary: [
        {
          type: "Person",
          name: "Chen",
          chiname: "陈",
          start: date,
          end: date,
          idNo: "E9000000",
          companyNo: 313612,
        },
      ],
    },
  });
  const control = form.control;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "companySecretary",
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof CompanySecretaryFormSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Secretary/公司秘书</CardTitle>
        <CardDescription>
          Please enter information on Directors/请输入公司秘书的信息
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
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
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Select
                          {...(control.register(
                            `companySecretary.${index}.type`
                          ),
                          { required: true })}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Person/Body Corporate" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Person">Person</SelectItem>
                            <SelectItem value="Body Corporate">
                              Body Corporate
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `companySecretary.${index}.name`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `companySecretary.${index}.chiname`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `companySecretary.${index}.start`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `companySecretary.${index}.end`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `companySecretary.${index}.idNo`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <Controller
                        render={({ field }) => (
                          <TableCell>
                            <Input {...field} />
                            <FormMessage/>
                          </TableCell>
                        )}
                        name={`companySecretary.${index}.companyNo`}
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
                    type: "Person",
                    name: "",
                    chiname: "",
                    start: "",
                    end: "",
                    idNo: "",
                    companyNo: 0,
                  })
                }
              >
                Add field
              </Button>
            </div>

            <Button type="submit" className="ml-3">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CompanySecretary;
