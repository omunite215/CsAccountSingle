import { z } from "zod";

// CompanyInfo
const bankAccountSchema = z.object({
  bankName: z.string().min(2, "min. 2 characters").max(50),
  bankAcc: z
    .string()
    .min(12, "need 12 char(s) only")
    .max(12, "need 12 char(s) only"),
});

export const CompanyInfoFormSchema = z.object({
  date: z.string(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  chiname: z.string().min(2, "min. 2 char(s)").max(255),
  incorporated: z.string().min(10).max(100),
  annual: z.string().min(10).max(100),
  address: z.string().min(1, "* required").max(65535),
  bankDetails: z.array(bankAccountSchema).default([]).optional(),
  email: z.string().email(),
  companyTel: z.string().length(12),
  companyfax: z.string().length(12),
});

// Share-Capital
export const ShareParticularRightsSchema = z.object({
  class: z.string().max(255),
  rightsAttached: z
    .number()
    .nonnegative({ message: "can't be negative." }),
});

export const ShareCapitalFormSchema = z.object({
  class: z.string().max(255),
  totalIssued: z
    .number()
    .positive()
    .min(1, { message: "min. 1" }),
  currency: z.string().max(3),
  totalSubscribed: z
    .number()
    .positive()
    .min(0.01, {
      message: "min. 0.01",
    }),
  paid: z.number().nonnegative({ message: "can't be negative." }).min(1, { message: "min. 1" }),
  unpaid: z.number().nonnegative({ message: "can't be negative." }),
});

// Sharholders

export const ShareholdersFormSchema = z.object({
  name: z.string().min(2, "min. 2 char(s)").max(255),
  chiname: z.string().min(2, "min. 2 char(s)").max(255),
  start: z.string().min(10).max(100),
  end: z.string().min(10).max(100),
  classOfShares: z.string().max(255),
  totalNumber: z
    .number()
    .nonnegative({ message: "can't be negative." })
    .min(0.01, {
      message: "min. 0.01",
    }),
  currency: z.string().max(3),
  totalAmount: z
    .number()
    .nonnegative({ message: "can't be negative." }).min(1, { message: "min. 1" }),
  shareCertiNo: z.string(),
});

//Director and Secretary Schema

export const userSchema = z.object({
  type: z.string(),
  name: z.string().min(2, "min. 2 char(s)").max(255),
  chiname: z.string().min(2, "min. 2 char(s)").max(255),
  start: z.string().min(10).max(100),
  end: z.string().min(10).max(100),
  idNo: z.string().max(100),
  companyNo: z.number({description: "*required number"}).min(10, { message: "* required" }),
});
