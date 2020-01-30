import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormItem = styled.div`
  width: 100%;
  position: relative;
  flex-shrink: 0;
`;

const Label = styled.label`
  color: #7d7d7d;
  transition: 0.2s ease-out all;
  font-size: 13px;
  display: block;
  padding: 0 15px 5px 15px;
`;

const inputStyles = `
  color: #000;
  font-size: 15px;
  padding: 5px 15px;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
  line-height: 22px;
  width: 100%;
  background: #fff;
  transition: 0.2s ease-out all;

`;

const StyledInput = styled.input`
  ${inputStyles}
  margin-bottom: ${props => props.marginBottom || "unset"};
  width: ${props => props.width || "100%"};
  &:focus {
    outline: none;
    border-color: ${props => `${props.theme.colors.mainBlue}`};
  }
`;

const StyledTextarea = styled.textarea`
  ${inputStyles}
  resize: none;
  min-height: 100px;
  margin-bottom: ${props => props.marginBottom || "unset"};
  &:focus {
    outline: none;
    border-color: ${props => `${props.theme.colors.mainBlue}`};
  }
`;

const Input = ({tag: Tag, name, label, ...props}) => (
  <FormItem>
    <Label htmlFor={name}>{label}</Label>

    {Tag === "textarea" ? (
      <StyledTextarea name={name} id={name} placeholder=" " {...props} />
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
