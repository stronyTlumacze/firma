import React from 'react';

function Grid() {
  const gridBuild = () => {
    let arr = []
    for (let i = 0; i < 94; i++) {
      arr.push(i)
    }
    return arr.map(el => <div className='grid-line' key={el}></div>)
  };
  return <div className='grid invis'>{gridBuild()}</div>;
}

export default Grid;
