"use client";

import { ShareParticularRightsSchema } from "@/app/validationSchemas";
import { Form, FormMessage } from "@/components/ui/form";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const ShareParticulars = () => {
  const form = useForm<z.infer<typeof ShareParticularRightsSchema>>({
    resolver: zodResolver(ShareParticularRightsSchema),
    defaultValues: {
      shareParticulars: [
        {
          class: "",
          rightsAttached: 0,
        },
      ],
    },
  });
  const control = form.control;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "shareParticulars",
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareParticularRightsSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Particulars of Rights Attached/所附权利详情</CardTitle>
        <CardDescription>
          Please enter information on Particulars of Rights
          Attached/请输入有关所附权利详情的信息
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
                      <Label htmlFor="class">Class of Shares</Label>
                    </TableHead>
                    <TableHead>
                      <Label htmlFor="rightsAttached">
                        Particulars of Rights Attached
                      </Label>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Input
                          {...(control.register(
                            `shareParticulars.${index}.class`
                          ),
                          { required: true })}
                        />
                        <FormMessage />
                      </TableCell>
                      <Controller
                        render={({ field }) => (
                          <TableCell>
                            <Input {...field} />
                            <FormMessage />
                          </TableCell>
                        )}
                        name={`shareParticulars.${index}.rightsAttached`}
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
                    rightsAttached: 0,
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

export default ShareParticulars;
