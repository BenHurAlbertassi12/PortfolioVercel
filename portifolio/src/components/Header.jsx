import React from 'react';
import { Link } from 'react-router-dom';
import { apiUser } from '../services/apiUser.jsx';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: ',',
    };
  }
  componentDidMount() {
    apiUser().then((nickName) => {
      if (nickName.name) {
        this.setState({ Loading: false });
      }
      this.setState({ nome: nickName.name });
    });
  }
  render() {
    const { nome } = this.state;
    return (
      <header>
        <Link to='/sobre'>Sobre Mim</Link>
        <Link to='/projetos'>Projetos</Link>
        <Link to='/contato'>Contato</Link>
      </header>
    );
  }
}

export default Header;
