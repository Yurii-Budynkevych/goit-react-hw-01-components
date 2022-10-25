import PropTypes from 'prop-types';
import { Card, User, StatsList } from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <User>
        <img src={avatar} alt="User avatar" width={400} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </User>

      <StatsList>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </StatsList>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
