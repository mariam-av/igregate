import styled from "styled-components";

export const StyledIcon = styled.div`
  ${exact("width")}
  ${exact("height")}
  margin: 5px;
  svg {
    color: inherit;
    height: 100%;
    width: 100%;
  }
`;

function exact(key) {
  return ({ size }) => `
      ${key}: ${size}px;
      min-${key}: ${size}px;
      max-${key}: ${size}px;
    `;
}

export const StyledLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  margin: 0 8px;

  color: #000000;
`;

export const Row = styled.div`
  display: flex;
  margin: 54px 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;
