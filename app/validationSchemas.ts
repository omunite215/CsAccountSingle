import { z } from "zod";

export const GuestUserFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255).nullable(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  email: z.string().max(255).email(),
});

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
    .min(5, { message: "*required | need min. 5 characters" }),
  house: z
    .string({ required_error: "*required" })
    .min(5, "*required | need min. 5 characters")
    .max(65),
  building: z
    .string({ required_error: "*required" })
    .min(5, "*required | need min. 5 characters")
    .max(65),
  street: z
    .string({ required_error: "*required" })
    .min(5, "*required | need min. 5 characters")
    .max(65),
  district: z
    .string({ required_error: "*required" })
    .min(5, "*required | need min. 5 characters")
    .max(65),
  country: z
    .string({ required_error: "*required" })
    .min(3, "*required | need min. 5 characters")
    .max(20),
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
  presentorName: z
    .string({ required_error: "*required" })
    .min(2, "min. 2 characters")
    .max(255),
  presentorChiName: z.string().min(2, "min. 2 characters").max(255).optional(),
  presentorAddress: z
    .string({ required_error: "*required" })
    .min(10, "*required | need min. 10 characters")
    .max(65535),
  presentorTel: z
    .string({ required_error: "*required" })
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" }),
  presentorFax: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" })
    .optional(),
  presentorEmail: z.string().max(255).optional(),
  presentorReferance: z.string().max(255),
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
  rightsAttached: z
    .string({ required_error: "*required" })
    .min(1, { message: "*required" })
    .max(255),
});

// Sharholders

const shareDetailsSchema = z.object({
  classOfShares: z.string().max(255),
  noOfShares: z.coerce
    .number()
    .nonnegative({ message: "This field can't be negative" })
    .min(1),
});

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
  email: z.string().max(255).email().optional(),
  shareDetails: z.array(shareDetailsSchema).default([]),
  idProof: z.instanceof(File).superRefine((file, ctx) => {
    if (!file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*ID Proof is required",
      });
    }
  }),
  addressProof: z
    .instanceof(File)
    .superRefine((file, ctx) => {
      if (!file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "*ID Proof is required",
        });
      }
    })
    .nullable(),
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
  shareDetails: z.array(shareDetailsSchema).default([]),
  idProof: z.instanceof(File).superRefine((file, ctx) => {
    if (!file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "*ID Proof is required",
      });
    }
  }),
  addressProof: z
    .instanceof(File)
    .superRefine((file, ctx) => {
      if (!file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "*ID Proof is required",
        });
      }
    })
    .nullable(),
});

//Company Secretary Schema
export const CompanySecretaryFormSchema = z.object({
  tcspLicenseNo: z.string().max(100),
  tcspReason: z
    .string()
    .min(10, "need min. 10 characters")
    .max(65535)
    .optional(),
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
  addressProof: z
    .instanceof(File)
    .superRefine((file, ctx) => {
      if (!file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "*ID Proof is required",
        });
      }
    })
    .nullable(),
});
