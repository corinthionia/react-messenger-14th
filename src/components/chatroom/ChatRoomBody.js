import styled, { css } from 'styled-components';
import me from '../../assets/me.json';
import { GetTime } from '../../utils/GetTime';

const ChatRoomBody = ({ chatList, setChatList }) => {
  const userName = 'dlwlrma';

  // const handleDoubleClick = (e) => {
  //   const newList = chatList.chats.map((chat) =>
  //     chat.sentAt === parseInt(e.target.id)
  //       ? { ...chat, isDoubleClicked: !chat.isDoubleClicked }
  //       : chat
  //   );

  //   setChatList(() => newList);
  // };

  return (
    <Wrapper>
      {chatList.chats.map(({ userId, sentAt, message }) => (
        <ChatWrapper key={sentAt} sender={userId}>
          <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/user1.jpg`} />
          <TextWrapper>
            <UserName sender={userId}>
              {userId === 'user0' ? me.userName : userName}
            </UserName>
            <ChatInfoWrapper sender={userId}>
              <Bubble
                // id={sentAt}
                // onDoubleClick={handleDoubleClick}
                sender={userId}
              >
                {message}
              </Bubble>
              <Time>{GetTime(sentAt)}</Time>
            </ChatInfoWrapper>
          </TextWrapper>
        </ChatWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
`;

const ChatWrapper = styled.div`
  max-width: 95%;
  margin: 4%;

  display: flex;
  flex-direction: ${({ sender }) =>
    sender === 'user0' ? 'row-reverse' : 'row'};
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 10%;
  height: 10%;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 88%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  width: 100%;

  font-size: 14px;
  color: #343a40;

  display: flex;
  flex-direction: ${({ sender }) =>
    sender === 'user0' ? 'row-reverse' : 'row'};
`;

const ChatInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${({ sender }) =>
    sender === 'user0' ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div`
  padding: 3%;
  margin-top: 2.5%;

  font-size: 12px;
  line-height: 18px;

  display: flex;

  ${({ sender }) =>
    sender === 'user0'
      ? css`
          flex-direction: row-reverse;
          color: #ffffff;
          background: #1986fc;
          border-radius: 12px 1px 12px 12px;
        `
      : css`
          flex-direction: 'row';
          color: #000000;
          background: #f1f1f3;
          border-radius: 1px 12px 12px 12px;
        `}
`;

const Time = styled.div`
  color: #c8c8c8;
  font-size: 10px;
  margin: 0 2%;

  display: flex;
  align-items: end;
`;

export default ChatRoomBody;
