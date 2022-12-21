import React from "react";
import { Redirect } from "react-router-dom";
import { createUser } from "../services/apiUser";

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            loading: false,
            name: '',
            next: false,
        }
    }

    entryButton = async () => {
        const { name } = this.state;
        this.state({ loading: true });
        await createUser({ name }).then((event) => {
            if (event) {
                this.setState({next:true})
        }})}

    aprove = () => {
        const { name } = this.state;
        const newInfo = name.length >= 3
        return !newInfo
  }
  
  changeInput =({ target }) => {
  const { value } = target;
    this.setState({
  name:value,
})
  }

    render() {
        const {name, loading, next} = this.state
      return (
          
          <div>
            <h1>Pagina de Login com Validator</h1>
            <div>
              {loading && <h1>carregando</h1>}
              {next && <Redirect to='/welcome' />}
              <div>
                <form>
                  <h1>Login</h1>
                  <span>
                    Para realizar login escreva algo como:{' '}
                    <br>email@email.com</br>
                  </span>
                  <label htmlFor='name'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      value={name}
                      onChange={this.changeInput}
                    />
                  </label>
                  <label htmlFor="senha">
                    <input type="password" name='senha' placeholder="Senha" />
                  </label>
                  <span>Nada será salvo</span>
                  <button
                    type='button'
                    onClick={this.entryButton}
                    disabled={this.aprove}>
                    primeiro botão
                  </button>
                </form>
              </div>
            </div>

          <div>
            <div>

              <button type='button' onClick={this.entryButton}>
                Entrar
              </button>
            </div>
            </div>
          </div>
        );
    }
}

export default Login