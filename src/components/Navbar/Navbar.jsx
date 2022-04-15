import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem,Typography} from "@material-ui/core";
import  {ShoppingCart} from "@material-ui/icons";
 import logo from "../assets/Clest_logo1";


const Navbar = () => {
  return (
	<>
	<AppBar position = "fixed" className= {classes.appBar} color = "inherit">
		<Toolbar>
			<Typography variant = "h6" className = {classes.title} color = "ingerit">
				<img src = {logo} alt = "DevShop" height = "25px" className={classes.image}/>
				DevShop
			</Typography>
		</Toolbar>
	</AppBar>
	</>
  )
}

export default Navbar