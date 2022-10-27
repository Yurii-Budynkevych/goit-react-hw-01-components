import PropTypes from 'prop-types';
import { OnlineMark, OfflineMark } from './Friends.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li>
      {isOnline ? <OnlineMark></OnlineMark> : <OfflineMark></OfflineMark>}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
