import PropTypes from 'prop-types';
import { FriendsList, OnlineMark, OfflineMark } from './Friends.styled';

export default function Friends({ friends }) {
  return (
    <FriendsList>
      <h2>Friends:</h2>
      {friends.map(el => (
        <li key={el.id}>
          {el.isOnline ? (
            <OnlineMark></OnlineMark>
          ) : (
            <OfflineMark></OfflineMark>
          )}
          <img src={el.avatar} alt="User avatar" width="48" />
          <p>{el.name}</p>
        </li>
      ))}
    </FriendsList>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
