import React from 'react'
import './App.css';
import IdDetails from './Components/IdDetails'

const user={
firstname:'Grace',
lastName:'Muchiri',
dateOfBirth:'10/10/1790',
subLocation:'Tenda Mazuri'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <IdDetails user={user}/>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
