import styled from 'styled-components';

import Template from '../base/Template';

import NavigationBar from '../base/NavigationBar';
import SearchUser from '../components/search/SearchUser';

const Search = () => {
  return (
    <Template
      header={<Title>Search</Title>}
      content={<SearchUser />}
      backgroundColor={'#ffffff'}
      bottom={<NavigationBar />}
    />
  );
};

const Title = styled.span`
  margin: 2rem 2rem 0 1rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default Search;
