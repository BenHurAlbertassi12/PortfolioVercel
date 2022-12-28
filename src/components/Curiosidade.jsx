import React from "react";

import Teatro from '../image/Teatro.jpg';
import '../css/Sobre.css';

class Curiosidade extends React.Component {
  render() {
    return (
      <div className='body-sobre' id='p-fim'>
        <section className='sobreMim'>
          <img
            src={Teatro}
            alt='Troupe de teatro em 2012'
            className='fotoTeatro'
          />
          <div className='textSobre'>
            <p className='p'>
            <h3>Curiosidades</h3>
              Como um bom nerd eu adoro:
              <br></br>
              Filmes e series/animes
              <br />
              Musica, muita musica
              <br />
              Codar
              <br />
              Gatos e cachorros (um pouco mais de gatos)
              <br />
              Volei e Patins.
              <br />
              Ja fiz curso de dublagem e adoro atuar
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default Curiosidade;