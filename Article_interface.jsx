import React from 'react';

function Article_interface() {
  return (
    <div>
      <div className="title">
        <span className="input-group-text" id="inputGroup-sizing-sm">Title &nbsp;&nbsp;</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          style={{ width: '96%' }}
          placeholder="Enter a descriptive title"
        />
      </div>
      <div className="Abstract">
        <p className="Abstract_text" style={{ margin: '0', marginBottom: '5px', marginTop: '20px' }}>Abstract</p>
        <textarea
          type="text"
          className="form-control"
          style={{ width: '99%', height: '200px', marginBottom: '5px' }} // Increased height here
          placeholder="Enter a 1-paragraph abstract"
        ></textarea>
      </div>

      <div className="problem_description">
        <p className="problem_description_text" style={{ margin: '0', marginBottom: '5px', marginTop: '20px' }}>Abstract Text</p>
        <textarea
          type="text"
          className="form-control"
          style={{ width: '99%', height: '400px', marginBottom: '5px' }} // Increased height here
        ></textarea>
      </div>

      <div className="tags">
        <span className="tags-text" id="inputGroup-sizing-sm">Tags &nbsp;</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          style={{ width: '95%',height:'25px', marginBottom: '30px' }}
          placeholder="Please add up to 3 tags to describe what your question is about."
        />
      </div>
      <div style={{ textAlign: 'right' , marginBottom:'10px'}}>
        <button type="button" className="btn" style={{ width: '10%', height:'25px', background: 'lightgrey', marginLeft: 'auto' }}>Post</button>
      </div>
    </div>
  );
}

export default Article_interface;
