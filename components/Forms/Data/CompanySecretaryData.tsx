import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { companySecretaryContent, companySecretaryRows } from "@/lib/constants";

const CompanySecretaryData = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Secretary List</CardTitle>
      </CardHeader>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {companySecretaryRows.map((row) => (
              <TableHead key={row.for}>{row.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {companySecretaryContent.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.surname}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.idNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CompanySecretaryData;
