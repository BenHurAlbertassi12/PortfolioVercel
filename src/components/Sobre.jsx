import React from "react";
import '../css/Sobre.css'

import EuUnicaFotoBonita from '../image/EuUnicaFotoBonita.jpg';

class Sobre extends React.Component {
  render() {
    return (
      <div className='body-sobre'>
      <section className='sobreMim'>
        <img
          src={EuUnicaFotoBonita}
          alt='BenHur Albertassi fazendo foto de modelo'
          className='fotoBonita'
        />
        <div className='textSobre'>
          <h3>Sobre Mim</h3>
          <p className='p'>
            Sou Apaixonado pela pela evolução humana e por toda a tecnologia
            criada, acredito estarmos vivendo uma das melhores épocas em relação
            ao desenvolvimento tecnológico.
            <br />
            Me tornei fascinado por programação em 2007 quando existiu um “boom”
            no Brasil na criação de servidores de jogos, onde meu primeiro
            contato com programação foi com o jogo “Tibia” mais tarde com
            “Ragnarok” e “Mu”, onde tive servidores constantemente atualizados e
            melhorados por mim e meu irmão
            <br />
            Em 2013 cometi o pequeno erro de entrar para o curso errado de
            Engenharia de Controle e Automação onde percebi que era realmente
            com programação que gostaria de trabalhar, tranquei o curso no em
            2015 pois tentaria entrar para a CEDERJ no Rio de Janeiro para o
            curso de TI (2016 e 2017), como estava muito atarefado com meu
            emprego acabei não conseguindo estudar, sendo assim não fui aprovado
          </p>
        </div>
      </section>
        </div>
    );
  }
}
export default Sobre;