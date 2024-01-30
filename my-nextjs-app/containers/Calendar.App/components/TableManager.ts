import { TableData, TableItem, TableManagerResult } from "../../../interfaces";

export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class TableManager {
  static async createTableFromEndpoint(): Promise<TableManagerResult> {
    const response = await fetch("https://run.mocky.io/v3/4ef5c941-172d-49df-b3e0-c44fa33ff402");

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }

    const jsonData: TableItem[] = await response.json();

    const processedData: TableItem[] = [];
    const allActiveTimes: number[] = [];

    jsonData.forEach((item) => {
      const startDate = new Date(item.startDate);
      const dayOfWeek = daysOfWeek[startDate.getDay()];

      const activeTime = startDate.getHours();

      const processedItem: TableItem = {
        ...item,
        dayOfWeek,
        activeTime,
      };

      processedData.push(processedItem);
      allActiveTimes.push(activeTime);
    });

    const sortedActiveTimes = Array.from(new Set(allActiveTimes)).sort();

    const table: TableData = {};

    processedData.forEach((item) => {
      const startTime = item.startTime;
      const endTime = item.endTime;
    
      for (let i = 0; i < 24; i++) {
        const currentHour = i.toString().padStart(2, '0');
        const currentTime = `${currentHour}:00`;
    
        if (!table[item.dayOfWeek]) {
          table[item.dayOfWeek] = {};
        }
    
        if (
          (!table[item.dayOfWeek][currentHour]?.course || item.startDate < table[item.dayOfWeek][currentHour].startDate) &&
          startTime <= currentTime &&
          currentTime < endTime
        ) {
          table[item.dayOfWeek][currentHour] = {
            ...item,
            cellDataTime: currentTime,
          };
        }
      }
    });
    
    return { table, allActiveTimes: sortedActiveTimes };
  }
}

export default TableManager;