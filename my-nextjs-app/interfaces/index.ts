export interface TableItem {
  activeTime: number;
  dayOfWeek: string;
  id: number;
  course: string;
  inProgress: boolean;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  cellDataTime: string;
}

export interface TableRow {
  [key: string]: TableItem | undefined;
}

export interface TableData {
  [key: string]: TableRow;
}

export interface TableManagerResult {
  table: TableData;
  allActiveTimes: number[];
}
