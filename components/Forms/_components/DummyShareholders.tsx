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
import { shareholdersContent } from "@/lib/constants";

const DummyShareholders = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shareholders List</CardTitle>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Name(Chinese)</TableHead>
            {/* <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead> */}
            <TableHead>Class of Shares</TableHead>
            <TableHead>Total Number</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Share Certificate ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shareholdersContent.map((item) => (
            <TableRow key={item.classOfShares}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.chiname}</TableCell>
              {/* <TableCell>{item.start}</TableCell>
              <TableCell>{item.end}</TableCell> */}
              <TableCell>{item.classOfShares}</TableCell>
              <TableCell>{item.totalNumber}</TableCell>
              <TableCell>{item.currency}</TableCell>
              <TableCell>{item.totalAmount}</TableCell>
              <TableCell>{item.shareCertiNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DummyShareholders;
