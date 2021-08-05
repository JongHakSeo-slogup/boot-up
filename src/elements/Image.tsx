import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  src: string;
  width?: string;
  height?: string;
  max_width?: string;
  max_height?: string;
  margin?: string;
}

const Image: React.FC<Props> = (props: Props) => {
  const { width, height, max_width, max_height, margin } = props;
  const styles = {
    width,
    height,
    max_width,
    max_height,
    margin,
  };

  if (props.type === "gradient") {
    return (
      <React.Fragment>
        <GradientImage {...styles} type={props.type} src={props.src} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <DefaultImage {...styles} type={props.type} src={props.src} />
    </React.Fragment>
  );
};

Image.defaultProps = {
  type: "default",
  src: "",
  width: "100%",
  height: "100%",
};

const DefaultImage = styled.img<Props>`
  width: auto;
  height: auto;
  max-width: ${(props) => props.max_width};
  max-height: ${(props) => props.max_height};
  margin: ${(props) => props.margin};
`;

const GradientImage = styled.div<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.max_width};
  max-height: ${(props) => props.max_height};
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 1)
    ),
    url(${(props) => props.src});
  margin: ${(props) => props.margin};
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Image;
