import {
  Card,
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
import { shareholdersContent, shareholdersRows } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CompanySecretaryCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Secretary</CardTitle>
        <CardDescription>
          Here are the details on Company Secretary
        </CardDescription>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {shareholdersRows.map((row) => (
              <TableHead
                key={row.for}
                className={cn({
                  hidden:
                    row.for === "classOfShares" || row.for === "totalShares",
                })}
              >
                {row.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{shareholdersContent[0].type}</TableCell>
            <TableCell>{shareholdersContent[0].surname}</TableCell>
            <TableCell>{shareholdersContent[0].name}</TableCell>
            <TableCell>{shareholdersContent[0].idNo}</TableCell>
            <TableCell>{shareholdersContent[0].address}</TableCell>
            <TableCell>{shareholdersContent[0].email}</TableCell>
            <TableCell>{shareholdersContent[0].phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default CompanySecretaryCard;
