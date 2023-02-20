import user from '../user.json';
import dataStat from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataStat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};