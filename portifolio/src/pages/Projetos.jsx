import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Projetos extends React.Component{
    render(){
        return (
        <div>
            <Header />
            <h1>Projetos</h1>
            <div className='rodapes'>
          <Footer />
</div>
        </div>
    )
    }
}
export default Projetos;