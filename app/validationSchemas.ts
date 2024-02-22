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
  companyTel: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" })
    .optional(),
  companyfax: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" })
    .optional(),
  time: z.enum(["1 year", "3 years"], { required_error: "*required" }),
});

// Share-Capital

export const ShareCapitalFormSchema = z.object({
  class: z.string().max(255),
  totalProposed: z.coerce.number().positive().min(1, { message: "min. 1" }),
  currency: z.string().max(3),
  unitPrice: z.coerce.number().positive().min(1, {
    message: "min. 1",
  }),
  total: z.coerce
    .number()
    .nonnegative({ message: "This field can't be negative" })
    .min(0.01),
  paid: z.coerce
    .number()
    .nonnegative({ message: "This field can't be negative" })
    .min(0),
  unpaid: z.coerce
    .number()
    .nonnegative({ message: "This field can't be negative" }),
  rightsAttached: z.string().max(255),
});

// Sharholders

export const ShareholdersFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255).nullable(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  idNo: z.string().max(100),
  address: z
    .string({ required_error: "*required" })
    .min(10, "*required | need min. 10 characters")
    .max(65535),
  phone: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" })
    .optional(),
  classOfShares: z.string().max(255),
  email: z.string().max(255).email().optional(),
  noOfShares: z.coerce
    .number()
    .nonnegative({ message: "This field can't be negative" })
    .min(1),
  idProof: z.instanceof(File).superRefine((file, ctx) => {
    if (!file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*ID Proof is required",
      });
    }
  }),
});

//DirectorsSchema

export const DirectorsFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255).nullable(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  idNo: z.string().max(100),
  address: z
    .string({ required_error: "*required" })
    .min(10, "*required | need min. 10 characters")
    .max(65535),
  phone: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" })
    .optional(),
  email: z.string().max(255).email().optional(),
  idProof: z.instanceof(File).superRefine((file, ctx) => {
    if (!file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*ID Proof is required",
      });
    }
  }),
});

//Company Secretary Schema
export const CompanySecretaryFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255).nullable(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  idNo: z.string().max(100),
  address: z
    .string({ required_error: "*required" })
    .min(10, "*required | need min. 10 characters")
    .max(65535),
  phone: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" })
    .optional(),
  email: z.string().max(255).email().optional(),
  idProof: z.instanceof(File).superRefine((file, ctx) => {
    if (!file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*ID Proof is required",
      });
    }
  }),
});
