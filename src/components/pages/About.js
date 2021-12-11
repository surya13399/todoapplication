import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h2>About React Todo App</h2>
      <p style={paraStyle}>
        This is React Todo App built with ReactJS
        
      </p>
      <p style={paraStyle}>
        I Have done it with some of my own preferences and as a way to make it
        unique.
      </p>
    </React.Fragment>
  );
}

const paraStyle = {
  margin: '10px 0'
};

export default About;
