import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Welcome.css'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Bem vindo ao meu Portifólio</h1>
          <br></br>
          <h3>
            No navegador acima você encontra links para meus projetos e contatos
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Welcome;
