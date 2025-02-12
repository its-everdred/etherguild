"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Quest } from "@prisma/client";

interface ProposedQuestsProps {
  quests: Quest[];
}

export function ProposedQuests({ quests }: ProposedQuestsProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Proposed Quests</h2>
      <div>
        <Table>
          <TableBody>
            {quests.map((quest) => (
              <TableRow
                key={quest.id}
                className="hover:bg-muted/50 border-b last:border-0"
              >
                <TableCell className="font-medium py-4">
                  {quest.title}
                </TableCell>
                <TableCell className="text-right py-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-muted-foreground"
                    disabled
                  >
                    Read More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
