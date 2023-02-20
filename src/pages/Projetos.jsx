import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PixelArt from '../components/PixelArt';
import SpongeFy from '../components/SpongeFy';
import StarWars from '../projects/StarWars';
import MercadoLivre from '../projects/MercadoLivre';
import DioBank from '../projects/DioBank';


class Projetos extends React.Component{
    render(){
        return (
          <div>
            <Header />
            <div className='body-projetos'>
              <PixelArt />
              <SpongeFy />
              <StarWars />
              <DioBank />
              <MercadoLivre />
            </div>
            <Footer />
          </div>
        );
    }
}
export default Projetos;
//