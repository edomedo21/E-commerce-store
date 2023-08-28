"use client"

import { ColumnDef } from "@tanstack/react-table"

export type BillboardColumn = {
  id: string
  label: string
  createdAT: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Oznaka",
  },
  {
    accessorKey: "createdAT",
    header: "Datum kreiranja",
  },
]
