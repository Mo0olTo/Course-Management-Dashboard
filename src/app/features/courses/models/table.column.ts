import { ColumnType } from "../../../shared/enums/column.type";

export interface TableColumn {
    key: string;
    header: string;
    type: ColumnType;
  }