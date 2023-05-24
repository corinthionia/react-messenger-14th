import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import ChatRoom from './pages/ChatRoom';

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
    <ChatRoom>
      {/* <Routes>
        <Route path="/chatroom/:userId" element={<ChatRoom />} />
      </Routes> */}
    </ChatRoom>
  );
}

export default App;
