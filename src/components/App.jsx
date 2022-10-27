import Profile from './Profile/Profile';
import profiles from '../components/Data/user';
import Statistics from './Statistics/Statistics';
import data from '../components/Data/data';
import FriendsList from './Friends/Friends';
import friendData from '../components/Data/friends';
import TransactionsHistory from './Transactions/Transactions';
import transactionsData from '../components/Data/transactions';

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

      <FriendsList friends={friendData} />

      <TransactionsHistory items={transactionsData} />
    </div>
  );
};
