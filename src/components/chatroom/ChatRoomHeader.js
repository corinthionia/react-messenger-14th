import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Header } from '../commons/Components';
import { FiChevronLeft } from 'react-icons/fi';

import me from '../../assets/me.json';
import friends from '../../assets/friends.json';

const ChatRoomHeader = ({ currentUserId, setCurrentUserId }) => {
  const { userId } = useParams();
  const user = friends.filter((friend) => friend.userId === userId)[0];
  const [currentUserName, setCurrentUserName] = useState(user.userName);

  const handleToggleUser = () => {
    currentUserId === 'user0'
      ? setCurrentUserId(userId)
      : setCurrentUserId('user0');

    currentUserId === 'user0'
      ? setCurrentUserName(user.userName)
      : setCurrentUserName(me.userName);
  };

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Button>
        <Link to={'/chatList'}>
          <FiChevronLeft />
        </Link>
      </Button>

      <ProfileWrapper onClick={handleToggleUser}>
        <ProfileImg
          src={`${process.env.PUBLIC_URL}/imgs/${currentUserId}.jpg`}
        />
        <TextWrapper>
          <UserName>{currentUserName}</UserName>
          <Typing>Typing...</Typing>
        </TextWrapper>
      </ProfileWrapper>

      <Button />
    </Header>
  );
};

const ProfileWrapper = styled.div`
  width: 40%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 56%;
  height: 75%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  width: 100%;
  height: 50%;
  font-size: 16px;

  display: flex;
  align-items: center;
`;

const Typing = styled.div`
  width: 100%;
  height: 50%;

  font-size: 12px;
  color: #c8c8c8;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

const Button = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ChatRoomHeader;
