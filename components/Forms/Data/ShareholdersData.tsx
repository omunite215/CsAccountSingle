import { Button } from "@/components/ui/button";
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
import { Pencil, Trash2 } from "lucide-react";
import ShareDetailsPopup from "./ShareDetailsPopup";

const ShareholdersData = () => {
  return (
      <Table>
        <TableHeader>
          <TableRow>
            {shareholdersRows.map((row) => (
              <TableHead
                key={row.for}
                className={cn({
                  hidden: row.for === "classOfShares" || row.for === "totalShares",
                })}
              >
                {row.label}
              </TableHead>
            ))}
            <TableHead>Share Details</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
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
              <TableCell><ShareDetailsPopup name={item.name} surname={item.surname} /></TableCell>
              <TableCell>
                <Button variant="outline">
                  <Pencil />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="destructive">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
};

export default ShareholdersData;
