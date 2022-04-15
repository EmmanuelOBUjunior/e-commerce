import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem,Typography} from "@material-ui/core";
import  {ShoppingCart} from "@material-ui/icons";
import logo from "../assets/Clest_logo1";

import useStyles from "./Navbar"

const Navbar = () => {
	const classes = useStyles();
  return (
	<>
	<AppBar position = "fixed" className= {classes.appBar} color = "inherit">
		<Toolbar>
			<Typography variant = "h6" className = {classes.title} color = "ingerit">
				<img src = {logo} alt = "DevShop" height = "25px" className={classes.image}/>
				DevShop
			</Typography>
			<div className={classes.grow}/>
			<div className={classes.button}>
				<IconButton aria-label = "Show Cart Items" color = "inherit">
					<Badge badgeContent = {2} color = "secondary">
						<ShoppingCart/>
					</Badge>
				</IconButton>
			</div>
		</Toolbar>
	</AppBar>
	</>
  )
}

export default Navbar