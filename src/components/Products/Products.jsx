import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

import useStyle from './styles';

const products = [
	{id: 1, name: "Shoe", description: "Running Shoe", price: "$5", image:"https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
	{id: 2, name: "Macbook", description: "Apple Macbook", price: "$10", image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
];

const Products = () =>{
	const classes = useStyle(); 
	return(
	<main className={ classes.content}>
		<div className ={classes.toolbar}/>
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