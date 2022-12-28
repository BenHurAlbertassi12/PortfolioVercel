import React from "react";
import pixel from '../image/pixel-art.png';

class PixelArt extends React.Component {
    render() {
        return (
          <div className='projeto-div'>
                <a
                    href='https://pixelart-three.vercel.app'
                >
              <h3 className='h3-projeto'>Pixel Art</h3>

              <img className='img-projeto' src={pixel} alt='pixel-art' />
              <p className='p-projeto'>HTML/CSS/JS</p>
            </a>
          </div>
        );
    }
}
export default PixelArt