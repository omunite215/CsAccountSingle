"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailForm from "./EmailForm";
import NameForm from "./NameForm";
import PasswordForm from "./PasswordForm";

const ProfilePage = () => {
	
	return (
		<div className="md:container w-full py-6 md:px-0 px-6">
			<Card className="mt-5">
				<CardHeader>
					<CardTitle>Profile Settings</CardTitle>
					<CardDescription>
						You can change your profile details from here
					</CardDescription>
				</CardHeader>
				<CardContent className="mt-5">
					<Tabs defaultValue="name">
						<TabsList defaultValue="name">
							<TabsTrigger value="name">Name</TabsTrigger>
							<TabsTrigger value="email">Email</TabsTrigger>
							<TabsTrigger value="password">Password</TabsTrigger>
						</TabsList>
						<TabsContent value="name">
							<NameForm/>
						</TabsContent>
						<TabsContent value="email">
							<EmailForm/>
						</TabsContent>
                        <TabsContent value="password">
                            <PasswordForm/>
                        </TabsContent>
					</Tabs>
				</CardContent>
				<CardFooter>
					<CardDescription>
						Copyright © 2012 - 2024 ComSec360®. All rights reserved.
					</CardDescription>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProfilePage;
