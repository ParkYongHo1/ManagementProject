import React from 'react';
import styled from '@emotion/styled';

const Span = ({ children }) => {
    return <StyledSpan>{children}</StyledSpan>;
};

const StyledSpan = styled.div`
    font-weight: 700;
    font-size: 12px;
    margin-right: 5px;
`;
export default Span;
