import styled from "styled-components";

export const ModalContent = styled.div`
  margin: 100px 0;
  height: 1000px;
  overflow: scroll;
`;

export const FieldsRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckboxLabel = styled.input`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 24px;
  height: 24px;
  /* identical to box height */

  accent-color: #601bb8;
  color: #000000;
  margin: 0 8px 0 16px;
`;

export const BlueBackground = styled.div`
  background: #e8e8fb;
  border-radius: 22px;
  padding: 1px;
  margin: 24px 0;
`;

export const Label = styled.div`
  margin: ${(props) => props.margin};
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  letter-spacing: 0.005em;

  color: #000000;
`;

export const Dot = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => props.margin || "54px 15px"};
  justify-content: ${(props) => (props.end ? "flex-end" : "flex-start")};
`;

export const Tag = styled.div`
  background: ${(props) => props.color};
  border-radius: 20px;
  padding: 12px 8px;
  margin: 24px 16px 24px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: fit-content;
  height: fit-content;
  letter-spacing: 0.005em;

  color: #ffffff;
`;

export const PrimaryButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ADADAD" : "#601bb8")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  ${(props) => {
    console.log(props.left);
    return props.left
      ? `
        margin-left: auto;
        margin-right: 0;
      `
      : `margin: 0 16px;`;
  }}
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;

  color: #ffffff;
  padding: 8px 25px;
`;
