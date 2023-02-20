import React from "react";
import pixel from '../image/bankdio.png';

class StarWars extends React.Component {
    render() {
        return (
          <div className='projeto-div'>
            <a href='https://bank-dio.vercel.app'>
              <h3 className='h3-projeto'>D.I.O - Bank</h3>

              <img className='img-projeto' src={pixel} alt='StarWars' />
              <p className='p-projeto'>HTML/BOOTSTRAP/JS</p>
            </a>
          </div>
        );
    }
}
export default StarWars;