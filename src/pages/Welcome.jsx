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
        <div className='body-header'>
          <h1 className='h1-home'>
            Ola! Seja bem vindo {nome}, este é meu Portifólio
          </h1>
          <br />
          <h3 className='h3-home'>
            No navegador acima você encontra links para meus projetos e contatos
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Welcome;
