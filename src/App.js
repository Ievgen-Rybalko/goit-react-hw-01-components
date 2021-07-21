import './App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json';


console.dir(user);

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
    </div>
  );
}

export default App;
