import {
    Card,
    CardHeader,
    CardTitle
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

const ShareholdersData = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shareholders List</CardTitle>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {shareholdersRows.map((row) => (
              <TableHead key={row.for}>{row.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {shareholdersContent.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.surname}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.classOfShares}</TableCell>
              <TableCell>{item.noOfShares}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ShareholdersData;
