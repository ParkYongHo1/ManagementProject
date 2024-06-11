import React from 'react';
import styled from '@emotion/styled';

const LoginContainer = ({ children }) => {
    return <StyledLoginContainer>{children}</StyledLoginContainer>;
};

const StyledLoginContainer = styled.div`
    display: flex;
    background-color: white;
    width: 1000px;
    height: auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    max-width: 90%;
`;

export default LoginContainer;
