import React from 'react';
import styled from '@emotion/styled';

const ForgotPasswordDiv = ({ children }) => {
    return <StyledForgotPasswordDiv>{children}</StyledForgotPasswordDiv>;
};

const StyledForgotPasswordDiv = styled.div`
    text-align: end;
    font-size: 12px;
`;
export default ForgotPasswordDiv;
