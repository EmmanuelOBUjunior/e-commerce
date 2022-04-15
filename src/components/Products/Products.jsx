import React from 'react';
import Grid from '@material-ui/core';


const products = [
	{id: 1, name: "Shoe", description: "running shoe"},
	{id: 2, name: "Macbook", description: "Apple Macbook"},
];

const Products = () =>{
	<main>
		<Grid container justify = "center" spacing = {4}>
			{products.map((products) =>{
				<Grid item key={products.id} xs = {12} sm = {6} md = {4} lg ={3}>
					<Products/>
				</Grid>
			})}
		</Grid>
	</main>
}

export default Products;