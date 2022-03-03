import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import Friends from './pages/Friends';
import Search from './pages/Search';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import Setting from './pages/Setting';

function App() {
  function setScreenSize() {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    );
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom/:userId" element={<ChatRoom />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
