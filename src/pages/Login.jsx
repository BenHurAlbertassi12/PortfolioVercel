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
    const { name, next } = this.state;
    return (
      <div className='body-login'>
        {next && <Redirect to='/welcome' />}
        <div className='div-form'>
          <form className='login-container'>
            <h1 className='h1-login'>Login</h1>
            <p className='p-login'>
              Coloque algo como:
              <br />
              qualquer@coisa.com
            </p>
            <label htmlFor='name'>
              <input
                className='input-text'
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={this.trocarInput}
                placeholder='Nome'
              />
            </label>
            <label htmlFor='senha'>
              <input
                className='input-text'
                name='senha'
                type='password'
                placeholder='Password'
              />
            </label>
            <p className='p-login'>Nada será salvo</p>
            <button
              className='button-login button-login-name-password'
              type='button'
              onClick={this.botaoEntrar}
              disabled={this.aprovado()}>
              Entrar
            </button>
          </form>

          <div className=''>
            <div className='overlay'>
              <div className='entrar-container'>
                <h1 className='h1-login'>Ir Direto</h1>
                <p className='p-login'>Se preferir pode entrar direto</p>
                <button
                  className='button-login'
                  type='button'
                  onClick={this.botaoEntrar}
                  id='signUp'>
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
