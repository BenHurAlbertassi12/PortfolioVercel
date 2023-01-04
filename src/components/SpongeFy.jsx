import React from "react";
import spongefy from '../image/spongefy.png';

class SpongeFy extends React.Component {
  render() {
    return (
      <div className='projeto-div'>
        <a href='https://spongefy.vercel.app'>
          <h3 className='h3-projeto'>Pixel Art</h3>

          <img className='img-projeto' src={spongefy} alt='pixel-art' />
          <p className='p-projeto'>HTML/CSS/REACT</p>
        </a>
      </div>
    );
  }
}
export default SpongeFy;
