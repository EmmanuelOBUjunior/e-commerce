import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

const products = [
	{id: 1, name: "Shoe", description: "running shoe", price: "$5", image:"https://www.pexels.com/photo/woman-lacing-up-her-gray-and-pink-nike-low-top-athletic-shoe-601177/"},
	{id: 2, name: "Macbook", description: "Apple Macbook", price: "$10", image: "https://www.pexels.com/photo/macbook-pro-near-iphone-and-apple-fruit-18105/"},
];

const Products = () =>{
	return(
	<main>
		<Grid container justify = "center" spacing = {4}>
			{products.map((products) => (
				<Grid item key={products.id} xs = {12} sm = {6} md = {4} lg ={3}>
					<Product product = {products}/>
				</Grid>
			))}
		</Grid>
	</main>
)
}

export default Products;