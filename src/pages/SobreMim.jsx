import React from 'react';
import Curiosidade from '../components/Curiosidade';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profissional from '../components/Profissional';
import Sobre from '../components/Sobre'


class SobreMim extends React.Component {
  render() {
    return (
      <div className='body-sobre'>
        <Header />
          <div className='div-titulo'>
            <h1 className='h1-name'>Ben Hur Albertassi</h1>
            <h2>
              Desenvolvedor <br /> F u l l - s t a c k{' '}
            </h2>
          </div>
            <Sobre />
            <Profissional />
            <Curiosidade />
        <Footer />
      </div>
    );
  }
}
export default SobreMim;
