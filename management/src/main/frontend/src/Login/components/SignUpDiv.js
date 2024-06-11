import React from 'react';
import styled from '@emotion/styled';

const SignUpDiv = ({ children }) => {
    return <StyledSignUpDiv>{children}</StyledSignUpDiv>;
};

const StyledSignUpDiv = styled.div`
    display: flex;
    align-items: center;
`;
export default SignUpDiv;
