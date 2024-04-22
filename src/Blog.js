import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import cover from "./images/blogImages/cover.jpg";
import countries from "./images/blogImages/countries.png";

export const Blog = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Box
				maxWidth={"1000px"}
				display="flex"
				alignItems="left"
				flexDirection={"column"}
				gap={2}
				p={3}
				margin={6}
			>
				<div>
					<Typography variant="overline">Climate Change Overline text</Typography>
					<Typography variant="h3">
						Climate Change is Important: Add a Title for the Blog
					</Typography>
				</div>
				<img src={cover}></img>
				<Typography variant="caption">
					Photo by Markus Spiske from Pexels:
					https://www.pexels.com/photo/earth-blue-banner-sign-3039036/
				</Typography>
				<Typography variant="subtitle1">
					by: Lea Emerlyn, Leven Cai, Derek Chen
				</Typography>
				<Divider />
				<Typography variant="h5">
					<b>Introduction</b>
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Sit amet massa vitae tortor condimentum lacinia
					quis. Ut tellus elementum sagittis vitae et leo duis ut.
					Tellus pellentesque eu tincidunt tortor. Elit at imperdiet
					dui accumsan sit amet nulla. Senectus et netus et malesuada
					fames. Eget nunc scelerisque viverra mauris in. Dui faucibus
					in ornare quam viverra. Maecenas ultricies mi eget mauris
					pharetra. Scelerisque purus semper eget duis at tellus at.
					Senectus et netus et malesuada fames ac turpis egestas sed.
				</Typography>
				<Typography>
					In dictum non consectetur a erat nam at. Vestibulum lectus
					mauris ultrices eros in. Nunc sed velit dignissim sodales
					ut. Turpis egestas pretium aenean pharetra magna ac. In
					tellus integer feugiat scelerisque varius morbi. In
					pellentesque massa placerat duis ultricies lacus. Nec nam
					aliquam sem et tortor consequat id. Dui vivamus arcu felis
					bibendum ut. Et odio pellentesque diam volutpat. Nibh tortor
					id aliquet lectus proin nibh nisl. Eu scelerisque felis
					imperdiet proin fermentum leo vel.
				</Typography>
				<Typography>
					Eget nullam non nisi est sit amet facilisis magna etiam.
					Faucibus vitae aliquet nec ullamcorper. Facilisis mauris sit
					amet massa vitae tortor condimentum lacinia. Sed lectus
					vestibulum mattis ullamcorper velit sed ullamcorper.
					Placerat vestibulum lectus mauris ultrices eros in cursus.
					Ac placerat vestibulum lectus mauris ultrices eros in cursus
					turpis. Sagittis nisl rhoncus mattis rhoncus urna neque
					viverra. Vel pharetra vel turpis nunc eget lorem dolor sed
					viverra. Eu feugiat pretium nibh ipsum consequat nisl vel
					pretium lectus. Viverra nam libero justo laoreet sit amet
					cursus sit. In vitae turpis massa sed elementum tempus.
					Tempus imperdiet nulla malesuada pellentesque elit eget
					gravida cum. Nibh mauris cursus mattis molestie a iaculis
					at. Integer eget aliquet nibh praesent. Tincidunt arcu non
					sodales neque. Vel facilisis volutpat est velit egestas dui
					id ornare. Enim ut sem viverra aliquet eget sit.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h5">
					<b>Exploratory Data Analysis</b>
				</Typography>
				<Typography variant="h6"> General EDA </Typography>
				<img src={countries}></img>
				<Typography variant="caption">Here is some caption</Typography>
				<Typography gutterBottom>
					Using the country surface temperature data set, we converted
					monthly temperatures to a yearly average, then extracted the
					slope and intercept based on the temperature trends for each
					country. The delta represents the difference in temperature
					from the starting year of 1743 and the ending year of 1990
					based on the slope and intercept from linear regression.
					Then we binned each delta into 0.5 degree increments to
					group countries with similar levels of temperature change
					for visualization purposes.
				</Typography>
				<Divider sx={{ opacity: 0, padding: "12px" }}></Divider>
				<Typography variant="h5">
					<b>Human Actions</b>
				</Typography>
				<Typography>
					Since climate change is a very important phenomenon, we were
					interested in exploring what correlations might exist
					between government activities and their countries’ surface
					temperature deltas. The three areas that we looked into were
					absolute tax revenue in US dollars, tax revenue as a
					percentage of GDP and capitalistic index.
				</Typography>
				<Typography variant="h6">Absolute Tax Revenue</Typography>
				<Typography>
					We took the median tax revenue of all the countries over the
					past 30 years to get a sense of which countries have the
					highest tax revenue.
				</Typography>
			</Box>
		</div>
	);
};
