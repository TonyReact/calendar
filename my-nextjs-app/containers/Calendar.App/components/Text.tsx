import React, { FC } from "react";
import { TextContainer } from "./TableStyles";

interface TextProps {
  label: string;
  value: string;
}

const Text: FC<TextProps> = ({ label, value }) => {
  return (
    <TextContainer>
      <span>{label}:</span> {value}
    </TextContainer>
  );
};

export default Text;