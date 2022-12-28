import React from "react";

import EstudioAdore from '../image/EstudioAdore.jpg';
import '../css/Sobre.css'

class Profissional extends React.Component {
  render() {
    return (
      <div className='body-sobre'>
      <section className='sobreMim'>
        <div className='textSobre'>
          <h3>Profissional</h3>
          <p className='p'>
            Consegui meu primeiro emprego aos 12 anos em um escritório de
            advocacia, ao completar 18 anos fui convidado para trabalhar na
            Radio88fm onde permaneci por 12 anos, meu primeiro ano foi como
            Auxiliar de escritório e posteriormente como produtor comercial, o
            que me trouxe muita proximidade com os clientes pois tinha que
            entender o que eles gostariam para determinada produção. Também
            trabalhei nos estúdios do ar e no setor comercial
          </p>
        </div>
        <img
          src={EstudioAdore}
          alt='Estudios Radio Adore Fm 2021'
          className='fotoEstudio'
          />
      </section>
          </div>
    );
  }
}
export default Profissional;