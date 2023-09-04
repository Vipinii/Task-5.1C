import React, { useState } from 'react';
import './App.css';
import Article_interface from './Article_interface';
import Question_interface from './Question_interface';

function App() {
  const [selectedOption, setSelectedOption] = useState('Question'); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <h2> New Post</h2>
      <div className="form-check" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Select Post Type:</span>
        <input
          type="radio"
          name="postType"
          id="questionOption"
          value="Question"
          checked={selectedOption === 'Question'}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="questionOption">
          Question
        </label>
        <input
          type="radio"
          name="postType"
          id="articleOption"
          value="Article"
          checked={selectedOption === 'Article'}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="articleOption" style={{ marginLeft: '10px' }}>
          Article
        </label>
      </div>

      <h2> What do you want to ask or share</h2>
      <p style={{ textAlign: 'left', marginBottom:'-5px', marginLeft:'200px' }}>
        This section is designed based on the type of the post. It could be developed by conditional rendering
      </p>
      <p style={{ textAlign: 'left', color: 'red',marginTop:'4px' ,marginBottom:'30px',marginLeft:'200px'}}>
        For post an article, the following section would be appeared.
      </p>

      {selectedOption === 'Question' && (
        <Question_interface />
      )}

      {selectedOption === 'Article' && (
        <Article_interface />
      )}
    </div>
  );
}

export default App;
