import React from 'react';
import Product from './product'


const Home = (props) => {
    const {shoes, getShoes} = props;
    return (
        <div className='container'>
        <div className='row'>
          {
            shoes.map(item => <Product key={item.id} id={item.id} title={item.title} content={item.content} price={item.price} />)
          }          
        </div>
        <button className='btn btn-primary' onClick={getShoes}>더보기</button>
      </div>
    )
};

export default Home;