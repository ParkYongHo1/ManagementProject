import React from 'react';
import styled from '@emotion/styled';

const NotFind = ({ children }) => {
    return <StyledNotFind>{children}</StyledNotFind>;
};

const StyledNotFind = styled.div`
    margin: 5px 0px;
    color: red;
    font-size: 12px;
    font-weight: 700;
`;
export default NotFind;
