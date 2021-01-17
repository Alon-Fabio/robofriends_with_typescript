import * as React from 'react';


interface searchChange {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void // Equals to 'searchChange: (event: React.SyntheticEvent<HTMLInputElement>) => : void
}

const SearchBox: React.SFC<searchChange> = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;