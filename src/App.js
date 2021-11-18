import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import Friends from './pages/Friends';
import Setting from './pages/Setting';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Friends />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chat/:userId" element={<ChatRoom />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*:focus {
        outline: none;
    }

    body {
        height: 100vh;
        width: 100vw;

        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default App;
