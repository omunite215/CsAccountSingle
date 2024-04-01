"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { shareCapitalRows } from "@/lib/constants";
import { useShareCapitalStore } from "@/store/shareCapitalDataStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import EditShareCapital from "./EditShareCapital";

const ShareCapitalData = () => {
	const shareCapitalData = useShareCapitalStore(
		(state) => state.shareCapitalData,
	);
	const deleteShareCapitalData = useShareCapitalStore(
		(state) => state.deleteShareCapitalData,
	);
	const { toast } = useToast();

	function deleteObjectById(id: number) {
		deleteShareCapitalData(id);
		toast({
			variant: "destructive",
			title: "Deleted!!",
			description: "The field is deleted successfully.",
		});
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>ShareCapital List</CardTitle>
			</CardHeader>
			<Table className="w-full">
				<TableHeader>
					<TableRow>
						{shareCapitalRows.map((row) => (
							<TableHead key={row.for}>{row.label}</TableHead>
						))}
						<TableHead>Edit</TableHead>
						<TableHead>Delete</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{shareCapitalData?.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.class}</TableCell>
							<TableCell>{item.totalProposed}</TableCell>
							<TableCell>{item.currency}</TableCell>
							<TableCell>{item.unitPrice}</TableCell>
							<TableCell>{item.total}</TableCell>
							<TableCell>{item.paid}</TableCell>
							<TableCell>{item.unpaid}</TableCell>
							<TableCell>{item.rightsAttached}</TableCell>
							<TableCell>
								<EditShareCapital id={item.id} />
							</TableCell>
							<TableCell>
								<Button
									variant="destructive"
									onClick={() => deleteObjectById(item.id)}
								>
									<Trash2 />
								</Button>
							</TableCell>
						</TableRow>
					))}
					{!shareCapitalData && (
						<Image
							src="/status/nothing.jpg"
							fill
							alt="no-data"
							className="mix-blend-multiply"
						/>
					)}
				</TableBody>
			</Table>
		</Card>
	);
};

export default ShareCapitalData;
