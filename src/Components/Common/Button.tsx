import styled from "styled-components";
import { color } from "@/Styles";

interface PropsType {
  width?: string;
  text?: string;
  active?: boolean;
  type?: "CHECK" | "CANCEL" | "PREV";
  onClick?: () => void;
}

export default function AssentButton({
  width = '100%',
  text,
  active = false,
  type = "CHECK",
  onClick
}: PropsType) {

  const getColor = () => {
    switch (type) {
      case "CHECK":
        return active ? color.blue[500] : color.blue[300];
      case "CANCEL":
        return active ? color.red[300] : color.red[200];
      case "PREV":
        return color.gray[300];
      default:
        return color.black;
    }
  };

  return (
    <Container
      width={width}
      type={type}
      active={active}
      bgColor={getColor()}
      onClick={onClick}
    >
      {text}
    </Container>
  );
}

const Container = styled.button<{ width: string; type: "CHECK" | "CANCEL" | "PREV"; active: boolean; bgColor: string; }>`
  width: ${({ width }) => width};
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${color.white};
  
  &:hover {
    background-color: ${({ type }) => type === "CHECK" ? color.blue[500] : color.red[300]};
  }
`;
