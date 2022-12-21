import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Welcome.css'
import { getUser } from '../services/userAPI';

class Welcome extends React.Component {
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
      <div>
        <Header />
        <div>
          <h1>Ola! Seja bem vindo {nome}, este é meu Portifólio</h1>
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
