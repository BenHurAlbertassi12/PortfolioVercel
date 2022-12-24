import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Sobre.css'

import EuUnicaFotoBonita from '../image/EuUnicaFotoBonita.jpg';
import EstudioAdore from '../image/EstudioAdore.jpg';
import Teatro from '../image/Teatro.jpg';

class SobreMim extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='titulo'>
          <h1 className='name'>Ben Hur Albertassi</h1>
          <h2>Desenvolvedor <br /> F u l l - s t a c k </h2>
        </div>
        <body>
          <div className='sobre'>
            <section className='sobreMim'>
              <img
                src={EuUnicaFotoBonita}
                alt='BenHur Albertassi fazendo foto de modelo'
                className='fotoBonita'
              />
              <div className='textSobre'>
                <h3>Sobre Mim</h3>
                <p className='p'>
                  Sou Apaixonado pela pela evolução humana e por toda a
                  tecnologia criada, acredito estarmos vivendo uma das melhores
                  épocas em relação ao desenvolvimento tecnológico.
                  <br />
                  Me tornei fascinado por programação em 2007 quando existiu um
                  “boom” no Brasil na criação de servidores de jogos, onde meu
                  primeiro contato com programação foi com o jogo “Tibia” mais
                  tarde com “Ragnarok” e “Mu”, onde tive servidores
                  constantemente atualizados e melhorados por mim e meu irmão
                  <br />
                  Em 2013 cometi o pequeno erro de entrar para o curso errado de
                  Engenharia de Controle e Automação onde percebi que era
                  realmente com programação que gostaria de trabalhar, tranquei
                  o curso no em 2015 pois tentaria entrar para a CEDERJ no Rio
                  de Janeiro para o curso de TI (2016 e 2017), como estava muito
                  atarefado com meu emprego acabei não conseguindo estudar,
                  sendo assim não fui aprovado
                </p>
              </div>
            </section>
            <hr />
            <section className='prof'>
              <div className='textSobre'>
                <h3>Profissional</h3>
                <p className='p'>
                  Consegui meu primeiro emprego aos 12 anos em um escritório de
                  advocacia, ao completar 18 anos fui convidado para trabalhar
                  na Radio88fm onde permaneci por 12 anos, meu primeiro ano foi
                  como Auxiliar de escritório e posteriormente como produtor
                  comercial, o que me trouxe muita proximidade com os clientes
                  pois tinha que entender o que eles gostariam para determinada
                  produção. Também trabalhei nos estúdios do ar e no setor
                  comercial
                </p>
              </div>
              <img
                src={EstudioAdore}
                alt='Estudios Radio Adore Fm 2021'
                className='fotoEstudio'
              />
            </section>
            <hr />
            <section className='lazer'>
              <img
                src={Teatro}
                alt='Troupe de teatro em 2012'
                className='fotoTeatro'
              />
              <div className='textSobre'>
                <h3>Curiosidades</h3>
                <p className='p'>
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
                </p>
                <p className='p'>Ja fiz curso de dublagem e adoro atuar</p>
              </div>
            </section>
          </div>
        </body>
        <Footer />
      </div>
    );
  }
}
export default SobreMim;
