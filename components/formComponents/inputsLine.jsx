import React, { Fragment } from "react";
import { ContentWrapper, Row, StyledIcon, StyledLabel } from "./style";
import Hint from "../svgs/hint.svg";

const InputsLine = ({ hint, label, children }) => {
  return (
    <Fragment>
      <Row>
        <StyledIcon size={25} dangerouslySetInnerHTML={{ __html: Hint }} />
        <StyledLabel>{label}</StyledLabel>
        <ContentWrapper>{children}</ContentWrapper>
      </Row>
    </Fragment>
  );
};

export { InputsLine };
