import React, { useState } from 'react';
import { Radio } from 'semantic-ui-react';
import './Header.css';
import Question from './Question';
import Article from './Article';

function Header() {
  const [selectedValue, setSelectedValue] = useState('question');

  const handleChange = (e, { value }) => {
    setSelectedValue(value);
  };

  return (
    <div className='Header'>
      <div className='newpost'>
        <h2>New Post</h2>
      </div>
      <div className='button'>
        <p>Select Post Type:</p>
        <Radio
          label='Question'
          name='postType'
          value='question'
          checked={selectedValue === 'question'}
          onChange={handleChange}
        />
        <Radio
          label='Article'
          name='postType'
          value='article'
          checked={selectedValue === 'article'}
          onChange={handleChange}
        />
      </div>
      <div className='content'>
        {selectedValue === 'question' && (
          < Question/>
        )}
        {selectedValue === 'article' && (
          <Article />
            
        )}
      </div>
    </div>
  );
}

export default Header;
