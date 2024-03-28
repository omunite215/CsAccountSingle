"use client";

import { GuestUserFormSchema } from "@/app/validationSchemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const InviteGuestUsers = ({ text }: { text: string }) => {
  const [disable, setDisable] = useState(false);

  const form = useForm<z.infer<typeof GuestUserFormSchema>>({
    resolver: zodResolver(GuestUserFormSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
    },
  });

  const inviteGuestUserRows = [
    {
      label: "Name",
      for: "name",
    },
    {
      label: "Email",
      for: "email",
    },
  ];

  // Submit Handler.
  function onSubmit(values: z.infer<typeof GuestUserFormSchema>) {
    console.log("Backend is yet to be initialized");
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite {text}</CardTitle>
        <CardDescription>
          Please enter information to invite {text} to fill the form.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <Table>
              <TableHeader>
                <TableRow>
                  {inviteGuestUserRows.map((row) => (
                    <TableHead
                      key={row.for}
                      className={cn({
                        hidden: disable && row.label === "Surname",
                      })}
                    >
                      <FormLabel htmlFor={row.for}>{row.label}</FormLabel>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormField
                      name="name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Name Eg: James" {...field} />
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
                              placeholder="Eg: xyz@email.com"
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
            <div>
              <Button type="submit" className="my-4">
                Invite
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default InviteGuestUsers;
