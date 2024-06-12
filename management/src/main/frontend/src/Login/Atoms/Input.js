import React from 'react';
import styled from '@emotion/styled';

const Input = (props) => {
    return <StyledInput {...props} />;
};

const StyledInput = styled.input`
    margin-bottom: 10px;
    width: 100%;
    padding: 10px 0px;
    border: none;
    border-bottom: 1px solid #ececec;

    &:focus {
        outline: none;
    }
`;

export default Input;
