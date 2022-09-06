import React from 'react';
import Header from '../components/Header';
import '../css/Contatos.css';
import Footer from '../components/Footer';

class Contatos extends React.Component {
  render() {
    return (
      <div>
        <Header className='cabecalho'/>
        <div className='contatos'>
          <br />
          <section className='section-header selecao'>
            <h1>C o n t a t o</h1>
            <hr />
            <br />
            <h4>Endereço</h4>
            <hr className='linhaEndereco' />
            <p>Rio de Janeiro / Brasil</p>
            <p>Setubal / Portugal</p>
            <br />
            <h4>Telefone</h4>
            <hr className='linhaTelefone' />
            <p>(24)99999-8028</p>
            <br />
            <h4>E-mail</h4>
            <hr className='linhaEmail' />
            <p>albertassibenhur@gmail.com</p>
          </section>
        </div>
        <div className='rodapes'>
          <Footer />
</div>
      </div>
    );
  }
}
export default Contatos;
