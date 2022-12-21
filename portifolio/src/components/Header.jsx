import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import '../css/Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
    };
  }

  componentDidMount() {
    getUser().then((nick) => {
      if (nick.name) {
        this.setState({ loading: false });
      }
      this.setState({ nome: nick.name });
    });
  }

  render() {
    const { nome } = this.state;
    return (

        <header className='cabecalho'>
          <Link className='linki' to="/sobre">Sobre Mim</Link>
          <Link className='linki' to="/projetos">Projetos</Link>
          <Link className='linki' to="/contato">Contatos</Link>
          <Link className='linki' to="/welcome">Bem vindo { nome }</Link>
        </header>

    );
  }
}

export default Header;
