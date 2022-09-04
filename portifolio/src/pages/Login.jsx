import React from 'react';
import { Navigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import MsgLoading from '../components/MsgLoading';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      name: '',
      next: false,
    };
  }

  botaoEntrar = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name }).then((event) => {
      if (event) {
        this.setState({ next: true });
      }
    });
  };

  aprovado = () => {
    const { name } = this.state;

    const minLength = 2;
    const outraInfo = name.length >= minLength;

    return !outraInfo;
  };

  trocarInput = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value,
    });
  };

  render() {
    const { name, loading, next } = this.state;
    return (
      <div className='container' id='container'>
        {loading && <MsgLoading />}
        {next && <Navigate to='/welcome' />}
        <div className='form-container sign-in-container'>
          <form>
            <h1>Login</h1>
            <span>
              Coloque algo como: <br /> qualquer@coisa.com
            </span>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={this.trocarInput}
            />
            <input type='password' placeholder='Password' />
            <span>Nada será salvo</span>
            <button onClick={this.botaoEntrar} disabled={this.aprovado()}>
              Entrar
            </button>
          </form>
        </div>

        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-right'>
              <h1>Ir Direto</h1>
              <p>Se preferir pode entrar direto</p>
              <button
                onClick={this.botaoEntrar}
                disabled={this.aprovado()}
                className='ghost'
                id='signUp'>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
