import { z } from "zod";

export const GuestUserFormSchema = z.object({
  type: z.enum(["person", "company"], { required_error: "*required" }),
  surname: z.string().min(2, "min. 2 char(s)").max(255).nullable(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  email: z.string().max(255).email(),
});

// CompanyInfo
const emptyStringToUndefined = z.literal('').transform(() => undefined);

function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export const CompanyInfoFormSchema = z.object({
  name: z
    .string()
    .min(2, "min. 2 characters")
    .max(255),
  chiname: z.string().min(2, "min. 2 characters").max(255).optional(),
  type: z.enum(["public", "private"]),
  nature: z
    .string()
    .min(5, { message: "*required | need min. 5 characters" }),
  house: z
    .string()
    .min(5, "*required | need min. 5 characters")
    .max(65),
  building: z
    .string()
    .min(5, "*required | need min. 5 characters")
    .max(65),
  street: z
    .string()
    .min(5, "*required | need min. 5 characters")
    .max(65),
  district: z
    .string()
    .min(5, "*required | need min. 5 characters")
    .max(65),
  country: z
    .string()
    .min(3, "*required | need min. 5 characters")
    .max(20),
  email: z.string().max(255).optional(),
  companyTel: z
    .string().max(12, {message: "*required | max. 12 characters"})
    .optional(),
  companyfax: z
    .string().max(12, {message: "*required | max. 5 characters"})
    .optional(),
  time: z.enum(["1 year", "3 years"]),
  presentorName: z
    .string()
    .min(2, "min. 2 characters")
    .max(255),
  presentorChiName: z.string().min(2, "min. 2 characters").max(255).optional(),
  presentorAddress: z
    .string()
    .min(10, "*required | need min. 10 characters")
    .max(65535),
  presentorTel: z
    .string()
    .regex(/^\+?\d{8,15}$/, { message: "Invalid phone number format" }),
  presentorFax: z
    .string()
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
    .string()
    .min(1, { message: "*required" })
    .max(255)
    .optional(),
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
