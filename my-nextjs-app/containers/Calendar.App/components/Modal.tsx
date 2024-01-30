import React, { FC } from "react";
import { Button, ModalContainer, ModalContent } from "./TableStyles";
import { TableItem } from "../../../interfaces";
import Text from '../components/Text'

enum EmployeeId {
  Default = 0,
  Ivan = 1,
  Petya = 2,
  Magi = 3,
  Rado = 4,
  Itso = 5,
}

interface ModalProps {
  selectedItem: TableItem;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ selectedItem, closeModal }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Course Details</h2>
        <Text label={"Lecturer"} value={EmployeeId[selectedItem.id]} />
        <Text label={"Course"} value={selectedItem.course} />
        <Text label={"Start Time"} value={selectedItem.startTime} />
        <Text label={"End Time"} value={selectedItem.endTime} />
        <Text label={"In Progress"} value={selectedItem.inProgress ? "Yes" : "No"} />
        <Button onClick={closeModal}>Close</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;