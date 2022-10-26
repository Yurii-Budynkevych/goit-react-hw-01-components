import Profile from './Profile/Profile';
import profiles from '../user';
import Statistics from './Statistics/Statistics';
import data from '../data';
import Friends from './Friends/Friends';
import friendData from '../friends';

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

      <Statistics title={'Upload stats'} stats={data} />
      <Statistics stats={data} />

      <Friends friends={friendData} />
    </div>
  );
};
