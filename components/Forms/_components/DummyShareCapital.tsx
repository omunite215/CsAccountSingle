import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shareCapitalContent } from "@/lib/constants";

const DummyShareCapital = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ShareCapital List</CardTitle>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Class of Shares</TableHead>
            <TableHead>Total Shares Proposed</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Total Capital Subscribed</TableHead>
            <TableHead>Total Amount (Paid Up)</TableHead>
            <TableHead>Total Amount (Unpaid)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shareCapitalContent.map((item) => (
            <TableRow key={item.class}>
              <TableCell>{item.class}</TableCell>
              <TableCell>{item.totalIssued}</TableCell>
              <TableCell>{item.currency}</TableCell>
              <TableCell>{item.totalSubscribed}</TableCell>
              <TableCell>{item.paid}</TableCell>
              <TableCell>{item.unpaid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DummyShareCapital;
