import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Label from "../Label/Label";
import TextareaAutosize from 'react-textarea-autosize';

const FormItem = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
`;
const StyledInput = styled.input`
  color: ${props => `${props.theme.colors.black}`};
  font-size: 1em;
  padding: 22px 32px 19px 32px;
  border: 1px solid ${props => `${props.theme.colors.grey}`};
  border-radius: 15px;
  line-height: 1.2;
  background: ${(props) => props.color || `${props.theme.colors.white}`};
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginbottom || "unset"};
  width: ${props => props.width || "100%"};
  &::-webkit-input-placeholder {
    color: ${props => `${props.theme.colors.grey}`};
  }
  &:focus {
    outline: none;
    border-color: ${props => `${props.theme.colors.orange}`};
  }
  @media (max-width: 1400px) {
    font-size: 0.8em;
    line-height: 1.3;
    padding: 17px 16px 13px 16px;
  }
`;

const StyledTextarea = styled(TextareaAutosize)`
  color: ${props => `${props.theme.colors.black}`};
  font-size: 1em;
  padding: 22px 32px 19px 32px;
  border: 1px solid ${props => `${props.theme.colors.grey}`};
  border-radius: 15px;
  line-height: 24px;
  background: ${(props) => props.color || `${props.theme.colors.white}`};
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginbottom || "unset"};
  width: ${props => props.width || "100%"};
  resize: none;
  overflow: none;
  &::-webkit-input-placeholder {
    color: ${props => `${props.theme.colors.grey}`};
  }
  &:focus {
    outline: none;
    border-color: ${props => `${props.theme.colors.orange}`};
  }
  @media (max-width: 1400px) {
    font-size: 0.8em;
    line-height: 1.3;
    padding: 17px 16px 13px 16px;
  }
`;

const Input = ({ tag: Tag, name, label, ...props }) => (
  <FormItem>
    {label ? <Label htmlFor={name}>{label}</Label> : null}

    {Tag === "textarea" ? (
      <StyledTextarea name={name} id={name} placeholder="" {...props} />
    ) : (
      <StyledInput
        type="text"
        name={name}
        id={name}
        placeholder=" "
        {...props}
      />
    )}
  </FormItem>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

Input.defaultProps = {
  tag: "input"
};

export default Input;
