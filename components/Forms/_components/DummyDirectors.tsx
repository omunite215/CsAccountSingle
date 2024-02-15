import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { directorsContent } from "@/lib/constants";

const DummyDirectors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Directors List</CardTitle>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Person / Body Corporate</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Name (Chinese)</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>ID Card No.</TableHead>
            <TableHead>Company No.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {directorsContent.map((item) => (
            <TableRow key={item.idNo}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.chiname}</TableCell>
              <TableCell>{item.start}</TableCell>
              <TableCell>{item.end}</TableCell>
              <TableCell>{item.idNo}</TableCell>
              <TableCell>{item.companyNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DummyDirectors;
