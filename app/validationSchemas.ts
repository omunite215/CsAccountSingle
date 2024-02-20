import { z } from "zod";

// CompanyInfo

export const CompanyInfoFormSchema = z.object({
  name: z
    .string({ required_error: "*required" })
    .min(2, "min. 2 characters")
    .max(255),
  chiname: z.string().min(2, "min. 2 characters").max(255).optional(),
  type: z.enum(["public", "private"], { required_error: "*required" }),
  nature: z
    .string({ required_error: "*required" })
    .min(5, { message: "*required" }),
  address: z
    .string({ required_error: "*required" })
    .min(10, "*required | need min. 10 characters")
    .max(65535),
  email: z.string().max(255).optional(),
  companyTel: z.string().optional(),
  companyfax: z.string().optional(),
  time: z.enum(["1 year", "3 years"], { required_error: "*required" }),
});

// Share-Capital
export const ShareParticularRightsSchema = z.object({
  class: z.string().max(255),
  rightsAttached: z.number().nonnegative({ message: "can't be negative." }),
});

export const ShareCapitalFormSchema = z.object({
  class: z.string().max(255),
  totalProposed: z.coerce.number().positive().min(1, { message: "min. 1" }),
  currency: z.string().max(3),
  unitPrice: z.coerce.number().positive().min(1, {
    message: "min. 1",
  }),
  total: z.coerce.number().nonnegative().min(0.01),
  paid: z.coerce.number().nonnegative().min(0),
  unpaid: z.coerce.number().nonnegative(),
});

export const EditShareCapitalFormSchema = z.object({
  class: z.string().max(255),
  totalProposed: z.coerce.number().positive().min(1, { message: "min. 1" }),
  currency: z.string().max(3),
  unitPrice: z.coerce.number().positive().min(1, {
    message: "min. 1",
  }),
  total: z.coerce.number().nonnegative().min(0.01),
  paid: z.coerce.number().nonnegative().min(0),
  unpaid: z.coerce.number().nonnegative(),
});

// Sharholders

export const ShareholdersFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  surname: z.string().min(2, "min. 2 char(s)").max(255),
  email: z.string().max(255).email().optional(),
  classOfShares: z.string().max(255),
  noOfShares: z.coerce.number().nonnegative({message : "This field can't be negative"}).min(1)
});



//DirectorsSchema

export const directorsSchema =  z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  email: z.string().max(255).email().optional(),
});

//Company Secretary Schema
export const companySecretarySchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  idNo: z.string().max(100),
});
