import { useParams } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import { Wrapper, Content } from '../components/commons/Components';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomBody from '../components/chatroom/ChatRoomBody';
import InputForm from '../components/chatroom/InputForm';

import chats from '../assets/chats.json';

const ChatRoom = () => {
  const { userId } = useParams();
  const [currentUserId, setCurrentUserId] = useState(userId);

  const filteredChats = chats.filter((user) => user.userId === userId);
  const [chatList, setChatList] = useState(filteredChats[0]);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [chatList]);

  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <Content ref={scrollRef}>
        <ChatRoomBody chatList={chatList} />
      </Content>
      <InputForm
        currentUserId={currentUserId}
        chatList={chatList}
        setChatList={setChatList}
      />
    </Wrapper>
  );
};

export default ChatRoom;
