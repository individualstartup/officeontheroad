import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
  children: React.ReactNode;
  id?: string;
}

const ContainerComponent: React.FC<ComponentProps> = ({ children, id }) => {
  return <Container id={id}> {children}</Container>;
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 20px;
`;

export default ContainerComponent;
