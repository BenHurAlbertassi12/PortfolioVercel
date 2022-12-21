import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class SobreMim extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <div className='titulo'>
            <h1>Ben-Hur Albertassi</h1>
            <h2>Desenvolvedor Full-stack</h2>
          </div>
          <div>
            <div className='sobre'>
              <h3>Sobre Mim</h3>
              <p>
                Sou Apaixonado pela pela evolução humana e por toda a tecnologia
                criada, acredito estarmos vivendo uma das melhores épocas em
                relação ao desenvolvimento tecnológico.
              </p>
              <br />
              <p>
                Me tornei fascinado por programação em 2007 quando existiu um
                “boom” no Brasil na criação de servidores de jogos, onde meu
                primeiro contato com programação foi com o jogo “Tibia” mais
                tarde com “Ragnarok” e “Mu”, onde tive servidores constantemente
                atualizados e melhorados por mim e meu irmão
              </p>
              <br />
              <p>
                Em 2013 cometi o pequeno erro de entrar para o curso errado de
                Engenharia de Controle e Automação onde percebi que era
                realmente com programação que gostaria de trabalhar, tranquei o
                curso no em 2015 pois tentaria entrar para a CEDERJ no Rio de
                Janeiro para o curso de TI (2016 e 2017), como estava muito
                atarefado com meu emprego acabei não conseguindo estudar, sendo
                assim não fui aprovado
              </p>
            </div>
            <br />
            <div className='prof'>
              <h3>Profissional</h3>
              <p>
                Consegui meu primeiro emprego aos 12 anos em um escritório de
                advocacia, ao completar 18 anos fui convidado para trabalhar na
                Radio88fm onde permaneci por 12 anos, meu primeiro ano foi como
                Auxiliar de escritório e posteriormente como produtor comercial,
                o que me trouxe muita proximidade com os clientes pois tinha que
                entender o que eles gostariam para determinada produção. Também
                trabalhei nos estúdios do ar e no setor comercial
              </p>
            </div>
            <br />
            <div className='lazer'>
              <h3>Lazer</h3>
              <p>
                Como um bom nerd eu adoro filmes e series/animes
                <br />
                Codar
                <br />
                Gatos e cachorros (um pouco mais de gatos)
                <br />
                Volei e Patins
              </p>
            </div>
          </div>
        </body>
        <Footer />
      </div>
    );
  }
}
export default SobreMim;
