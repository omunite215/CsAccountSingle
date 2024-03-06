"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDataContext } from "@/context/ContextProvider";
import { shareCapitalRows } from "@/lib/constants";

const ShareCapitalCard = () => {
  const { shareCapitalData } = useDataContext();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Capital</CardTitle>
        <CardDescription>Here are the details on ShareCapital</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {shareCapitalRows.map((row) => (
                <TableHead key={row.for}>{row.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {shareCapitalData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.class}</TableCell>
                <TableCell>{item.totalProposed}</TableCell>
                <TableCell>{item.currency}</TableCell>
                <TableCell>{item.unitPrice}</TableCell>
                <TableCell>{item.total}</TableCell>
                <TableCell>{item.paid}</TableCell>
                <TableCell>{item.unpaid}</TableCell>
                <TableCell>{item.rightsAttached}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ShareCapitalCard;
