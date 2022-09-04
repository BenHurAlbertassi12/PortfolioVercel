import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import MsgLoading from '../components/MsgLoading';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      btnLogin: '',
      login: false,
      email: '',
      next: false,
      password: '',
    };
  }

  botãoEntrar = async () => {
    const { email } = this.state;
    this.setState({ loading: true });
    await createUser({ email }).then((event) => {
      if (event) {
        this.setState({ next: true });
      }
    });
  };

  trocarInput = ({ target }) => {
    const { value } = target;
    this.setState({
      email: value,
    });
  };

  render() {
    const { email, loading, next } = this.state;
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
            <input
              type='email'
              placeholder='Email'
              name='name'
              id='name'
              value={email}
              onChange={this.trocarInput}
            />
            <input type='password' placeholder='Password' />
            <span>Nada será salvo</span>
            <button onClick={this.botãoEntrar} disabled={this.aprovado()}>
              Entrar
            </button>
          </form>
        </div>

        <div className='overlay-container'>
          <div className='overlay'>
            <div className='irDireto irDireto-right'>
              <h1>Ir Direto</h1>
              <p>Se preferir pode entrar direto</p>
              <button className='ghost' id='signUp'>
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
