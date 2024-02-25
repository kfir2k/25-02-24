import './home.css';
import React, { Component } from 'react'
import ProductList from './product/ProductList';

class Home extends Component {
	state = {  } 
	render() { 
		return (
			<div className="home">
				This is the home Component!
				<ProductList/>
			</div>
		);
	}
}
 
export default Home;