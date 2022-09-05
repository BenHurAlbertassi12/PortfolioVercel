import React from 'react';
import Header from '../components/Header';
import '../css/Contatos.css';

class Contatos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className='section-header'>
          <h1>C o n t a t o</h1>
          <hr />
            <br />
          <h4>Endereço</h4>
           <p>Rio de Janeiro / Brasil</p>
           <p>Setubal / Portugal</p>
            <br />
          <h4>Telefone</h4>
           <p>(24)99999-8028</p>
            <br />
          <h4>E-mail</h4>
           <p>albertassibenhur@gmail.com</p>
        </section>
      </div>
    );
  }
}
export default Contatos;
