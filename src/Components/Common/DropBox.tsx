import { Arrow1 } from "@/Assets";
import { color, font } from "@/Styles";
import { useState } from "react";
import styled from "styled-components";

interface DropBoxProps {
  width?: string,
  text?: string;
  options?: Array<string>;
  onChange?: (selectedOption: string) => void;
}

const DropBox = ({ width = '150px', text = '', options, onChange }: DropBoxProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(text);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setShowOptions(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <Container width={width}>
      <DropBoxContainer onClick={() => setShowOptions(!showOptions)}>
        <SelectedText>{selected}</SelectedText>
        <Arrow1
          size={20}
          color={color.gray[500]}
          rotate="bottom"
        />
      </DropBoxContainer>
      {showOptions && (
        <OptionsList>
          {options?.map((option, index) => (
            <OptionItem key={index} onClick={() => handleOptionClick(option)}>
              <SelectedText>{option}</SelectedText>
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </Container>
  );
};

export default DropBox;

const Container = styled.div<{ width: string }>`
  position: relative;
  min-width: ${({ width }) => width};
`

const DropBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px 6px 16px;
  gap: 16px;
  border-radius: 8px;
  background-color: ${color.gray[100]};
`;

const OptionsList = styled.div`
  width: 100%;
  position: absolute;
  top: 32px;
  max-height: 200px;
  overflow: scroll;
  border: 1px solid ${color.gray[200]};
  border-radius: 8px;
  background-color: ${color.white};
`;

const OptionItem = styled.div`
  padding: 8px 24px;
  &:hover {
    background-color: ${color.gray[100]}
  }
`;

const SelectedText = styled.p`
  ${font.medium12}
  color: ${color.gray[600]};
`;