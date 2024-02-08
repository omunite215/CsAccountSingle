"use client";

import { ShareCapitalFormSchema } from "@/app/validationSchemas";
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

const ShareCapital = () => {
  const form = useForm<z.infer<typeof ShareCapitalFormSchema>>({
    resolver: zodResolver(ShareCapitalFormSchema),
    defaultValues: {
      shareCapital: [
        {
          class: "",
          totalIssued: 0,
          currency: "",
          totalSubscribed: 0,
          paid: 0,
          unpaid: 0,
        },
      ],
    },
  });
  const control = form.control;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "shareCapital",
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareCapitalFormSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Capital/股本</CardTitle>
        <CardDescription>
          Please enter information on Share Capital/请输入股本信息
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class of Shares</TableHead>
                    <TableHead>Total Shares Proposed</TableHead>
                    <TableHead>Currency</TableHead>
                    <TableHead>Total Capital to be Subscribed</TableHead>
                    <TableHead>Total Amount (Paid Up)</TableHead>
                    <TableHead>Total Amount (Unpaid)</TableHead>
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Input
                          {...(control.register(`shareCapital.${index}.class`),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareCapital.${index}.totalIssued`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareCapital.${index}.currency`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareCapital.${index}.totalSubscribed`
                          ),
                          { required: true })}
                        />
                        <FormMessage/>
                      </TableCell>
                      <TableCell>
                        <Input
                          {...(control.register(`shareCapital.${index}.paid`),
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
                        name={`shareCapital.${index}.unpaid`}
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
                    class: "",
                    totalIssued: 0,
                    currency: "",
                    totalSubscribed: 0,
                    paid: 0,
                    unpaid: 0,
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

export default ShareCapital;
