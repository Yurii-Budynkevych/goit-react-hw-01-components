import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: ${props => props.theme.colors.gold};
`;
export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.sizes[2]}px;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;
