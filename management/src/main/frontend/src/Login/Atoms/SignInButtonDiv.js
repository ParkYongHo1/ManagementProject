import React from 'react';
import styled from '@emotion/styled';

const SignInButtonDiv = ({ children }) => {
    return <StyledSignInButtonDiv>{children}</StyledSignInButtonDiv>;
};

const StyledSignInButtonDiv = styled.div`
    text-align: center;
`;
export default SignInButtonDiv;
