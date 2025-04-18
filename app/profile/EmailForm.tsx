import CustomFormField from "@/components/CustomFormField";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

import { z } from "zod";

const EmailForm = () => {
	const [dialog, setDialog] = useState(false);
	const EmailSchema = z.object({ email: z.string().max(255).email().trim() });
	const OtpSchema = z.object({
		otp: z.string().length(6, {
			message: "Your one-time password must be 6 characters.",
		}),
	});
	const form = useForm<z.infer<typeof EmailSchema>>({
		resolver: zodResolver(EmailSchema),
		defaultValues: {
			email: "",
		},
	});
	const otpform = useForm<z.infer<typeof OtpSchema>>({
		resolver: zodResolver(OtpSchema),
		defaultValues: {
			otp: "",
		},
	});
	function onSubmit(values: z.infer<typeof EmailSchema>) {
		console.log(values);
		setDialog(true);
	}
	function onOtpSubmit(values: z.infer<typeof OtpSchema>) {
        console.log(values.otp);
        toast.success("Email Updated Successfully!!");
        setDialog(false);
    }
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Email</CardTitle>
					<CardDescription>
						Make changes to your Email here. Click save when you&apos;re done.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<CustomFormField
								control={form.control}
								name="email"
								placeholder="example@email.com"
								label="Email"
								type="email"
							/>
							<Button type="submit" variant="gooeyLeft">
								Save Changes
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
			<AlertDialog open={dialog}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>OTP Verification!!</AlertDialogTitle>
						<AlertDialogDescription>
							To continue please verify yourself using OTP.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<Form {...otpform}>
						<form
							onSubmit={otpform.handleSubmit(onOtpSubmit)}
							className="space-y-6"
						>
							<FormField
								control={otpform.control}
								name="otp"
								render={({ field }) => (
									<FormItem>
										<FormLabel>One-Time Password</FormLabel>
										<FormControl>
											<InputOTP maxLength={6} {...field}>
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Submit</Button>
						</form>
					</Form>
                    <AlertDialogFooter>
                    <Button variant="linkHover1">Resend OTP</Button>

                    </AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};

export default EmailForm;
