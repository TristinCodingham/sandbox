import React, { useState } from "react";
import { Stack } from "@mui/material";
import SingleLine from "./components/Inputs/SingleLine";
import { inputWithDisabledProps } from "./HOC/inputWithDisabledProps";
import { inputWithRequiredProps } from "./HOC/inputWithRequiredProps";
import { inputWithCopyableProps } from "./HOC/inputWithCopyableProps";
import { inputWithTooltipProps } from "./HOC/inputWithTooltipProps";
import { inputWithCurrencyProps } from "./HOC/inputWithCurrencyProps";
import Input from "./components/Inputs/Input";
import { inputWithPatternProps } from "./HOC/inputWithPatternProps";
import { inputWithLabelProps } from "./HOC/inputWithLabelProps";

export default function MUIExamples() {
  const [text, setText] = useState("");

  return (
    <Stack direction="row">
      {/* 
      <SingleLine value={text} onChange={(e) => setText(e.target.value)} tooltip="Value cannot be empty" isError={true} isRequired={true} top={"top"} bottom="helper text" prefix={<FormatColorTextIcon />} suffix={<ClearIcon />} style={{ height: "30px" }} />
      <SingleLine value={text} onChange={(e) => setText(e.target.value)} tooltip="Value cannot be empty" isError={false} isRequired={true} isDisabled={true} top={"top"} bottom="helper text" prefix="prefix" suffix="suffix" />
      <SingleLine top={"label"} bottom="helper text" prefix="prefix" suffix="suffix" />
      */}
      <Stack gap="20px">
        <Input />
        {/* <SingleLine value={text} setValue={(e) => setText(e.target.value)} />
        <SingleLineDisabled value={text} setValue={(e) => setText(e.target.value)} />
        <SingleLineRequired value={text} setValue={(e) => setText(e.target.value)} />
        <SingleLineCopyable value={text} setValue={(e) => setText(e.target.value)} /> */}
        {/* <SingleLineTooltip value={text} setValue={(e) => setText(e.target.value)} tooltip="Tooltip" /> */}
        {/* <SingleLineCurrency value={text} setValue={setText} /> */}
        {/* <SingleLinePattern value={text} setValue={setText} pattern={/(a|b|c)/g} /> */}
        <SingleLineLabel label="Pattern" value={text} setValue={e => setText(e.target.value)} />
        <SingleLineDisabledRequiredCopyable value={text} setValue={(e) => setText(e.target.value)} />
      </Stack>
    </Stack>
  );
}

const SingleLineDisabled = inputWithDisabledProps(SingleLine);
const SingleLineRequired = inputWithRequiredProps(SingleLine);
const SingleLineCopyable = inputWithCopyableProps(SingleLine);
const SingleLineTooltip = inputWithTooltipProps(SingleLine);
const SingleLineCurrency = inputWithCurrencyProps(SingleLine);
const SingleLinePattern = inputWithPatternProps(SingleLine);
const SingleLineLabel = inputWithLabelProps(SingleLine);
const SingleLineDisabledRequiredCopyable = inputWithDisabledProps(inputWithCopyableProps(inputWithRequiredProps((SingleLine))));