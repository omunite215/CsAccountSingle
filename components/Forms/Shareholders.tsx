"use client";

import { ShareholdersFormSchema } from "@/app/validationSchemas";
import { Form, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Label } from "../ui/label";

const Shareholders = () => {
  const date = new Date().toDateString();
  const form = useForm<z.infer<typeof ShareholdersFormSchema>>({
    resolver: zodResolver(ShareholdersFormSchema),
    defaultValues: {
      shareholders: [
        {
          name: "",
          chiname: "",
          start: date,
          end: date,
          classOfShares: "",
          totalNumber: 0,
          currency: "",
          totalAmount: 0,
          shareCertiNo: ""
        },
      ],
    },
  });
  const control = form.control;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "shareholders",
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareholdersFormSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shareholders/股东</CardTitle>
        <CardDescription>
          Please enter information on Shareholders/请输入股东信息
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <Table>
              <TableHeader>
              <TableRow>
                <TableHead><Label htmlFor="name">Name</Label></TableHead>
                <TableHead><Label htmlFor="chiname">Name(Chinese)</Label></TableHead>
                <TableHead><Label htmlFor="start">Start Date</Label></TableHead>
                <TableHead><Label htmlFor="end">End Date</Label></TableHead>
                <TableHead><Label htmlFor="classOfShares">Class of Shares</Label></TableHead>
                <TableHead><Label htmlFor="totalNumber">Total Number</Label></TableHead>
                <TableHead><Label htmlFor="currency">Currency</Label></TableHead>
                <TableHead><Label htmlFor="totalAmount">Total Amount</Label></TableHead>
                <TableHead><Label htmlFor="shareCertiNo">Share Certificate No.</Label></TableHead>
              </TableRow>
            </TableHeader>
                <TableBody>
                  {fields.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.name`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.chiname`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.start`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.end`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.classOfShares`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.totalNumber`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.currency`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareholders.${index}.totalAmount`
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
                        name={`shareholders.${index}.shareCertiNo`}
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
                    name: "",
                    chiname: "",
                    start: date,
                    end: date,
                    classOfShares: "",
                    totalNumber: 0,
                    currency: "",
                    totalAmount: 0,
                    shareCertiNo: ""
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

export default Shareholders;
