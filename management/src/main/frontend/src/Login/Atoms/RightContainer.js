import React from 'react';
import styled from '@emotion/styled';

const RightContainer = ({ children }) => {
    return <StyledRightContainer>{children}</StyledRightContainer>;
};

const StyledRightContainer = styled.div`
    width: 100%;
    max-width: 500px;
    border-left: 1px solid #c6cdd2;
    padding: 20px 70px;
    box-sizing: border-box;
    text-align: start;
`;

export default RightContainer;
