import { ModalBase } from "../../modal";
import React from "react";
import { InputsLine } from "../../formComponents/inputsLine";
import Select from "react-select";
import {
  PrimaryButton,
  BlueBackground,
  ModalContent,
  StyledCheckboxLabel,
  FieldsRow,
  Label,
  Dot,
  Row,
  Tag
} from "./Create.style";

const CreateTrackingLink = () => {
  const automaticColor = "#601BB8";
  const inputColor = "#16C512";
  const manualColor = "#F38300";
  const handleSubmit = (a) => console.log(a);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  const tags = {
    automatic: ["iGregateID=2345678uytfd_XXXXXXXXX"],
    input: [
      "utm_source=happydays=rbb",
      "utm_source=happydays=rbb",
      "utm_medium=rbb"
    ],
    manual: ["utm_promotionid=567uhjji87tyhjhjui8"]
  };

  return (
    <ModalBase title="Create new tracking links">
      <ModalContent>
        {/* This Link is For* */}
        <InputsLine label="This Link is For*">
          <FieldsRow>
            <StyledCheckboxLabel type="radio" value="ad" name="link_for" />
            Placing in an Ad
            <StyledCheckboxLabel type="radio" value="website" name="link_for" />
            Redirecting traffic from a website
            <StyledCheckboxLabel type="radio" value="landing" name="link_for" />
            Redirecting traffic from a landing page
          </FieldsRow>
        </InputsLine>
        {/* Links targer brand* */}
        <InputsLine label="Links targer brand*">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>
        {/* Tracking link domain* */}
        <InputsLine label="Tracking link domain*">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>
        {/* Tracking link name* */}
        <InputsLine label="Tracking link name*">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>
        {/* Tracking link Description  */}
        <InputsLine label="Tracking link Description">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>
        {/* Link group  */}
        <InputsLine label="Link group">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>
        {/* Product topic  */}
        <InputsLine label="Product topic">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>
        {/* Product topic  */}
        <InputsLine label="Product topic">
          <FieldsRow>
            <Select options={options} />
          </FieldsRow>
        </InputsLine>

        <BlueBackground>
          <InputsLine label="Tracking URL input">
            <FieldsRow>
              <Select options={options} />
            </FieldsRow>
          </InputsLine>
        </BlueBackground>

        <BlueBackground>
          <Label margin="24px 16px 32px 16px">
            Parameters in the Final Target URL
          </Label>
          <Row margin="0 16px">
            <Dot color={automaticColor} />
            <Label margin="0 16px 0 8px">Automatically added</Label>
            <Dot color={inputColor} />
            <Label margin="0 16px 0 8px">Detected from input URL</Label>
            <Dot color={manualColor} />
            <Label margin="0 16px 0 8px">Manually added</Label>
          </Row>
          <Row margin="33px 16px">
            {Object.entries(tags).map((tag) => {
              const key = tag[0];
              if (key === "automatic") {
                return tag[1].map((linkName) => (
                  <Tag color={automaticColor}>{linkName} </Tag>
                ));
              }
              if (key === "input") {
                return tag[1].map((linkName) => (
                  <Tag color={inputColor}>{linkName} </Tag>
                ));
              }
              return tag[1].map((linkName) => (
                <Tag color={manualColor}>{linkName} </Tag>
              ));
            })}
          </Row>
          <Label margin="24px 16px">
            Manually add additional URL Parameters
          </Label>
          <Row>
            <Label margin=" 0 24px 0 8px">Parameter type</Label>
            <input />

            <Label margin=" 0 24px 0 8px">Parameter value</Label>
            <input />
            <Label margin=" 0 24px 0 8px">Snippet</Label>
            <input />
            <PrimaryButton>Add</PrimaryButton>
          </Row>
        </BlueBackground>
        <PrimaryButton disabled left>
          Generate Link
        </PrimaryButton>

        <BlueBackground>
          <InputsLine label="Tracking Link">
            <FieldsRow>
              <input />
            </FieldsRow>
          </InputsLine>
          <InputsLine label="Tracking URL Final">
            <FieldsRow>
              <input />
            </FieldsRow>
          </InputsLine>
          <Row end>
            <PrimaryButton>Create another link</PrimaryButton>

            <PrimaryButton>Close</PrimaryButton>
          </Row>
        </BlueBackground>
      </ModalContent>
    </ModalBase>
  );
};

export { CreateTrackingLink };
