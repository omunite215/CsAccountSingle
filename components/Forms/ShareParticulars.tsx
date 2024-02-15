"use client";

import { ShareParticularRightsSchema } from "@/app/validationSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { classOfSharesContent } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
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

const ShareParticulars = () => {
  const form = useForm<z.infer<typeof ShareParticularRightsSchema>>({
    resolver: zodResolver(ShareParticularRightsSchema),
    defaultValues: {
      class: "ordinary",
      rightsAttached: 0,
    },
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof ShareParticularRightsSchema>) {
    console.log("Backend is yet to be initialized");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Particulars of Rights Attached</CardTitle>
        <CardDescription>
          Please enter information on Particulars of Rights Attached
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
                      <FormLabel htmlFor="class">Class of Shares</FormLabel>
                    </TableHead>
                    <TableHead>
                      <FormLabel htmlFor="rightsAttached">
                        Particulars of Rights Attached
                      </FormLabel>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableCell>
                    <FormField
                      control={form.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue="ordinary"
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Class of Shares" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {classOfSharesContent.map((item) => (
                                <SelectItem value={item.value} key={item.value}>
                                  {item.label}
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
                      control={form.control}
                      name="rightsAttached"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Particulars of Rights Attached"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                </TableBody>
              </Table>
            </div>
            <Button type="submit" className="my-4">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ShareParticulars;
