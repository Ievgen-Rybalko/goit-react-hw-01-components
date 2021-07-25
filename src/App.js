import './App.css';
import FriendList from './components/FriendList/FriendList.js';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import friends from './data/friends.json';
import transactions from './data/transactions.json';
import user from './data/user.json';
import userStats from './data/statistical-data.json';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" userStats={userStats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
