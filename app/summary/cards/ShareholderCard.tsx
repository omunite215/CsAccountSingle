import ShareDetailsPopup from "@/components/Forms/Data/ShareDetailsPopup";
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

const ShareholdersCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shareholders</CardTitle>
        <CardDescription>Here are the details on Shareholders</CardDescription>
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
            <TableHead>Share Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shareholdersContent.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.surname}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.idNo}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <ShareDetailsPopup name={item.name} surname={item.surname} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ShareholdersCard;
