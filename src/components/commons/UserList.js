import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserList = ({ userId, userName, message }) => {
  return (
    <Wrapper>
      <StyledLink to={`/chatroom/${userId}`}>
        <InfoWrapper>
          <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
          <TextWrapper>
            <UserName>{userName}</UserName>
            <Message>{message}</Message>
          </TextWrapper>
        </InfoWrapper>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95%;
  height: 20%;
  margin-left: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  text-decoration: none;
`;

const InfoWrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 70%;
  height: 60px;
  margin-left: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  width: 100%;
  height: 40%;

  font-size: 16px;
  color: #343a40;
`;

const Message = styled.div`
  width: 100%;
  height: 60%;

  font-size: 12px;
  line-height: 18px;
  color: #868e96;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default UserList;
