// import css file
import './App.css';

// Importing AppBar and ToolBar from material UI
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'

// import state
import { useState } from 'react';

// import two components 
import UserLogin from './components/UserLogin'
import Dashboard from './components/Dashboard'

function App() {
    // 12.5pts - Uses the Boolean value of state.loggedIn to display Login Screen, uses App Bar Component.
    const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  return (
    <div className="App">
        <AppBar>
          <ToolBar>
          Will's Music App
          </ToolBar>
        </AppBar>
        { loggedIn ? <Dashboard /> : <UserLogin handleLogin={() => handleLogin()} />}
    </div>
  );
}

export default App;