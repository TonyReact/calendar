import React, { FC, useState, useEffect } from "react";
import { TableContainer, TableWrapper, TableElement, StickyTh, StickyTd, Td } from "./TableStyles";
import Modal from "./Modal";
import { TableData, TableItem } from "../../../interfaces";
import TableManager, { daysOfWeek } from "./TableManager";
import { useToasts } from 'react-toast-notifications';
import CourseItem from "./CourseItem";

const Table: FC = () => {
  const [tableData, setTableData] = useState<TableData>({});
  const [selectedItem, setSelectedItem] = useState<TableItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToasts();
  const [filteredHours, setFilteredHours] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { table } = await TableManager.createTableFromEndpoint();
        setTableData(table);

        setTimeout(() => {
          addToast('Data updated successfully!', { appearance: 'success', autoDismiss: true });
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
        addToast('Failed to fetch data. Please try again.', { appearance: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const activeHours: Set<string> = new Set();
    daysOfWeek.forEach((day) => {
      Object.keys(tableData[day] || {}).forEach((hour) => {
        activeHours.add(hour);
      });
    });

    const sortedActiveHours = Array.from(activeHours).sort();
    setFilteredHours(sortedActiveHours.length > 0 ? sortedActiveHours : []);
  }, [tableData]);

  const handleItemClick = (item: TableItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <TableContainer>
      <TableWrapper>
        <TableElement>
          <thead>
            <tr>
              <StickyTh>Time</StickyTh>
              {daysOfWeek.map((day) => (
                <StickyTh key={day}>
                  {day}
                </StickyTh>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredHours.map((hour) => (
              <tr key={hour}>
                <StickyTd>{`${hour}:00`}</StickyTd>
                {daysOfWeek.map((day) => (
                  <Td key={`${day}-${hour}`}>
                    {tableData[day]?.[hour] &&
                      tableData[day][hour].inProgress &&
                      tableData[day][hour].startTime === `${hour}:00` && (
                        <CourseItem
                          item={tableData[day][hour]}
                          onClick={() => handleItemClick(tableData[day][hour])}
                        />
                      )}
                  </Td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableElement>
      </TableWrapper>

      {selectedItem && (
        <Modal selectedItem={selectedItem} closeModal={closeModal} />
      )}
    </TableContainer>
  );
};

export default Table;