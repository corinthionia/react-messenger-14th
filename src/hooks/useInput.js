import { useState } from 'react';

const useInput = (initialText) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const reset = () => {
    setInputText('');
  };

  return [inputText, handleInputChange, reset];
};

export default useInput;
