import styled from "styled-components";

const getColor = (props: any) => {
  const { fontSize, theme } = props;

  switch (fontSize) {
    case "10":
      return theme.colors.red;
    case "12":
      return theme.colors.blue;
    default:
      return "white";
  }
};

export const ClockTimeWrapper = styled.span<{ isExpired: boolean }>`
  font-weight: bold;

  color: ${getColor};

  color: ${(props) =>
    props.isExpired
      ? props.theme.common.colors.red
      : props.theme.common.colors.blue};

  ${(props) => props.theme.common.colors.blue};
`;

export const ClockResetButton = styled.div<any>``;
