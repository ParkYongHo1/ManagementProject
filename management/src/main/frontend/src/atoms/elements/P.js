import React from 'react';
import styled from '@emotion/styled';

const P = ({ children }) => {
    return <StyledP>{children}</StyledP>;
};

const StyledP = styled.div`
    color: #c6cdd2;
    margin: 0;
`;
export default P;
