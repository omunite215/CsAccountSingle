"use client";

import { CompanyInfoFormSchema } from "@/app/validationSchemas";
import { HoverCardComponent } from "@/components/HoverCard";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDataContext } from "@/context/ContextProvider";
import { CompanyInfoHoverContent } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CompanyInfo = () => {
  const { setTabValue } = useDataContext();
  const form = useForm<z.infer<typeof CompanyInfoFormSchema>>({
    resolver: zodResolver(CompanyInfoFormSchema),
    defaultValues: {
      name: "",
      chiname: undefined,
      nature: "",
      type: "private",
      house: "",
      building: "",
      street: "",
      district: "",
      country: "Hong Kong",
      email: "",
      companyTel: "",
      companyfax: "",
      time: "1 year",
      presentorName: "",
      presentorChiName: undefined,
      presentorAddress: "",
      presentorTel: "",
      presentorFax: "",
      presentorEmail: "",
      presentorReferance: "CompanyName-NNC1-06-03-2024",
    },
  });

  // Submit Handler.
  function onSubmit(values: z.infer<typeof CompanyInfoFormSchema>) {
    console.log(values);
    setTabValue("SI");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Info</CardTitle>
        <CardDescription>Enter information about your Company</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-flex items-center gap-2">
                      <span>Company Name (English):</span>
                      <HoverCardComponent
                        content={
                          <ol className="space-y-3 list-[lower-alpha] *:leading-relaxed px-2 py-2">
                            <li>{CompanyInfoHoverContent.name.first}</li>
                            <li>{CompanyInfoHoverContent.name.second}</li>
                          </ol>
                        }
                        size={20}
                      />
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="company name (English)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="chiname"
                control={form.control}
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
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-flex items-center gap-2">
                      <span>Select Type of Company:</span>
                      <HoverCardComponent
                        content={
                          <span className=" leading-relaxed">
                            {CompanyInfoHoverContent.type}
                          </span>
                        }
                        size={20}
                      />
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex justify-start items-center gap-10"
                      >
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="private" />
                          </FormControl>
                          <FormLabel className="font-normal">Private</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="public" disabled />
                          </FormControl>
                          <FormLabel className="font-normal text-muted-foreground">
                            Public
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="nature"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nature of Business:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Description about Nature..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-3">
              <FormField
                name="house"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-flex items-center gap-2">
                      <span>Address: </span>
                      <HoverCardComponent
                        content={
                          <span className=" leading-relaxed">
                            {CompanyInfoHoverContent.address}
                          </span>
                        }
                        size={20}
                      />
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Flat / Floor / Block" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="building"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Building" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="street"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Street" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="district"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="District" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="country"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="HongKong" {...field} readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company E-mail:</FormLabel>
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
                name="companyTel"
                control={form.control}
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
                name="companyfax"
                control={form.control}
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
            <FormField
              name="time"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" inline-flex items-center gap-2">
                    <span>
                      Choose how long period of Business Registration Fee:
                    </span>
                    <HoverCardComponent
                      content={
                        <span className=" leading-relaxed">
                          {CompanyInfoHoverContent.time}
                        </span>
                      }
                      size={20}
                    />
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex justify-start items-center gap-10"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1 year" />
                        </FormControl>
                        <FormLabel className="font-normal">1 Year</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="3 years" />
                        </FormControl>
                        <FormLabel className="font-normal">3 Years</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Card>
              <CardHeader>
                <CardTitle className=" inline-flex items-center gap-2">
                  <span>Presentor&lsquo;s Referance</span>
                  <HoverCardComponent
                    content={
                      <span className=" font-normal leading-relaxed text-base">
                        {CompanyInfoHoverContent.presentor}
                      </span>
                    }
                    size={28}
                  />
                </CardTitle>
                <CardDescription>
                  Please enter info on Presentor&lsquo;s Referance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    name="presentorName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (English):</FormLabel>
                        <FormControl>
                          <Input placeholder="James Bond" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="presentorChiName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (Chinese):</FormLabel>
                        <FormControl>
                          <Input placeholder="Name (Chinese)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  name="presentorAddress"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg: 16, Taichi Street..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    name="presentorTel"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telephone:</FormLabel>
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
                    name="presentorFax"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fax No:</FormLabel>
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
                <FormField
                  name="presentorEmail"
                  control={form.control}
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
                <FormField
                  name="presentorReferance"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Presentor&lsquo;s Referance:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg: CompanyName-NNC1-06-03-2024"
                          {...field}
                          readOnly
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Button type="submit">Save & Next</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CompanyInfo;
