import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: navy;
  color: #fff;
`;
export const User = styled.div`
  text-align: center;
`;
export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0;
  padding: 0;

  font-style: italic;
  font-size: 24px;
  color: ${props => props.theme.colors.gold};
`;
