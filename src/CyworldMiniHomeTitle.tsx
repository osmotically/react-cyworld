import React from 'react';

function CyworldMiniHomeTitle() {
  // Replace this title with the server side string
  const title = 'Edit your own title later!';
  return (
    <>
      <span style={{ color: 'orange', fontSize: '2em' }}>{title}</span>
      <a style={{ color: 'grey', fontSize: '12px', position: 'absolute', right: '2%', bottom: '1%' }}>https://osmotically.github.io/react-cyworld/</a>
    </>
  );
}

export default CyworldMiniHomeTitle;