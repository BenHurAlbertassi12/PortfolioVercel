import React from 'react';
import '../css/Header.css';
import Header from './Header';

class Sobremim extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p className='linki'>Sobre mim</p>
      </div>
    );
  }
}

export default Sobremim;