import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import MsgLoading from '../components/MsgLoading';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
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
        {next && <Redirect to='/welcome' />}
        <div className='form-container sign-in-container'>
          <form>
            <h1>Login</h1>
            <span>
              Coloque algo como: <br /> qualquer@coisa.com
            </span>
            <label htmlFor="name">
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={this.trocarInput}
              placeholder='Nome'
            />
            </label>
            <label htmlFor='senha'>
            <input name='senha' type='password' placeholder='Password' />
            </label>
            <span>Nada será salvo</span>
            <button type='button' onClick={this.botaoEntrar} disabled={this.aprovado()}>
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
                type='button'
                onClick={this.botaoEntrar}
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
