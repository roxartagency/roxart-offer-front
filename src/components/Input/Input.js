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

const StyledInput = styled.input`
  color: #000;
  font-size: 1em;
  padding: 24px 32px;
  border: 1px solid ${props => `${props.theme.colors.lightGrey}`};
  border-radius: 15px;
  line-height: 1;
  background: #fff;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "unset"};
  width: ${props => props.width || "100%"};
  &::-webkit-input-placeholder {
    color: ${props => `${props.theme.colors.grey}`};
  }
  &:focus {
    outline: none;
    border-color: ${props => `${props.theme.colors.orange}`};
  }
`;

const StyledTextarea = styled.textarea`
  color: #000;
  font-size: 1em;
  padding: 24px 32px;
  border: 1px solid ${props => `${props.theme.colors.lightGrey}`};
  border-radius: 15px;
  line-height: 1;
  width: 100%;
  background: #fff;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "unset"};
  width: ${props => props.width || "100%"};
  &::-webkit-input-placeholder {
    color: ${props => `${props.theme.colors.grey}`};
  }
  &:focus {
    outline: none;
    border-color: ${props => `${props.theme.colors.orange}`};
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
