import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  background-color: ${p => p.theme.colors.tomato};
`;
export const OnlineMark = styled.span`
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
`;
export const OfflineMark = styled.span`
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
`;
