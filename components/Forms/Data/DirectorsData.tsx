import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { directorsContent, directorsRows } from "@/lib/constants";

const DirectorsData = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Directors List</CardTitle>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {directorsRows.map((row) => (
              <TableHead key={row.for}>{row.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {directorsContent.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.surname}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DirectorsData;
