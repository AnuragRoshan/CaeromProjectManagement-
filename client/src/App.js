import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import FileManager from './pages/FileManager';
import Messages from './pages/Messages';
import Saved from './pages/Saved';
import Order from './pages/Order';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/fileManager" element={<FileManager />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
