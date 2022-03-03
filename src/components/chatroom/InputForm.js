import { useParams } from 'react-router';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { Bottom } from '../commons/Components';

const InputForm = ({ currentUserId, chatList, setChatList }) => {
  const { userId } = useParams();
  const [inputText, handleInputChange, reset] = useInput('');

  const handleAddNewMsg = (e) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        userId: currentUserId,
        message: inputText,
        sentAt: Date.now(),
      };

      setChatList({ userId: userId, chats: [...chatList.chats, msg] });
      reset();
    } else {
      alert('Please enter a message');
    }
  };

  return (
    <Bottom>
      <Form>
        <Button type="button">😀</Button>
        <Input
          value={inputText}
          onChange={handleInputChange}
          placeholder="Message..."
          spellCheck={false}
        />
        <Button onClick={handleAddNewMsg}>➕</Button>
      </Form>
    </Bottom>
  );
};

const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 60%;
  height: 50%;
  padding: 0 4%;

  outline: none;
  font-size: 12px;

  border: 1px solid #d2d2d2;
  border-radius: 12px;
`;

const Button = styled.button`
  width: 10%;
  height: 50%;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export default InputForm;
