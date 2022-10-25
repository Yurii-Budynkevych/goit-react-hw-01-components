import Profile from './Profile/Profile';
import profiles from '../user';

export const App = () => {
  return (
    <div>
      <Profile
        username={profiles.username}
        tag={profiles.tag}
        location={profiles.location}
        avatar={profiles.avatar}
        stats={profiles.stats}
      />
    </div>
  );
};
