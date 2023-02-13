import React from "react";
import pixel from '../image/StarWars.png';

class StarWars extends React.Component {
    render() {
        return (
          <div className='projeto-div'>
            <a href='https://starwars-plants.vercel.app'>
              <h3 className='h3-projeto'>Star Wars Planets</h3>

              <img className='img-projeto' src={pixel} alt='StarWars' />
              <p className='p-projeto'>HTML/BOOTSTRAP/JS</p>
            </a>
          </div>
        );
    }
}
export default StarWars;