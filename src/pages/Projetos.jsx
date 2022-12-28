import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PixelArt from '../components/PixelArt';
import SpongeFy from '../components/SpongeFy';


class Projetos extends React.Component{
    render(){
        return (
        <div>
          <Header />
            <div className='body-projetos'>
             <PixelArt />       
             <SpongeFy />       
            </div>
          <Footer />
        </div>

    )
    }
}
export default Projetos;
//