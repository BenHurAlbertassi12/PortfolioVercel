import React from "react";
import ML from '../image/mercadolivre.jpg';

class MercadoLivre extends React.Component {
    render() {
        return (
          <div className='projeto-div'>
            <a href='https://github.com/BenHurAlbertassi12/myStore'>
              <h3 className='h3-projeto'>MercadoLivre API</h3>

              <img className='img-projeto' src={ML} alt='MercadoLivre' />
              <p className='p-projeto'>HTML/VSS/JS/REACT</p>
            </a>
          </div>
        );
    }
}
export default MercadoLivre;