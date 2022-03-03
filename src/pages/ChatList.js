import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/commons/Components';
import NavBar from '../components/commons/NavBar';

import chats from '../assets/chats.json';
import friends from '../assets/friends.json';
import UserList from '../components/commons/UserList';

const ChatList = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Messages</HeaderTitle>
      </Header>
      <Content>
        {friends.map(({ userId, userName }, i) => (
          <UserList
            key={userId}
            userId={userId}
            userName={userName}
            message={chats[i].chats[chats[i].chats.length - 1].message}
          />
        ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

export default ChatList;
