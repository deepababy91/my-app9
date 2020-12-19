import React from 'react';

import './App.css';

function App() {
    const nbrs=[4,1,23,8,7,93,22,44,43]
    const colors=['red', 'blue', 'green']
    for(let i=0;i<colors.length;i++)
    {
      let color=colors[i];
      console.log("oldway:" + color);
    }
  colors.forEach( (color,index) => {
    console.log("NEW WAY:" + color + "," + index);
  })
  let nbrs2=nbrs.map((nbr) => {
     return nbr*2;
  })
 nbrs2.forEach( (nbr) => {
    console.log(nbr);
  })
  let nbrs3=nbrs.filter((nbr) => {
    console.log(nbr,(nbr%2==0))
    return nbr%2==0;
 })
 nbrs3.forEach( (nbr) => {
  console.log(nbr);
})
  
    return (
    <div className="App">
    {
      colors.map( (color,index) => {
     return<div key={index}>{color}</div>;
      })
    }
       
    </div>
  );
}

export default App;
