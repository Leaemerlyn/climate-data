import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Landing.css";
import { Link } from "react-router-dom";

export function Landing() {
	return (
		<div id="landingImage">
			<div className="landingContainer">
				<Box
					bgcolor="#FFFFFFD9"
					maxWidth={800}
					my={4}
					display="flex"
					alignItems="left"
					flexDirection={"column"}
					gap={4}
					p={6}
					margin={2}
				>
					<Typography variant="h3">
						<b> Hot Topics</b>
					</Typography>
					<Typography>
                        THIS IS JUST PLACEHOLDER TEXT
						The first goal of this project is to provide an analysis
						of factors that affect Earth’s surface temperature. We
						will relate local and global temperature change to
						natural phenomena, such as volcanic eruption, and assess
						whether specific human actions, such as capitalistic
						index, relate to patterns in temperature.
						<br />
						<br />
						For the second goal, we are interested in creating a
						forecasting model using the Seasonal ARIMA model to
						predict future temperature observations. We picked
						Seasonal ARIMA, because our temperature dataset
						inherently has seasonality between season to season (ie.
						Summers & Winters). Given a year and a city, our model
						will predict the temperature at that given year and
						city.
					</Typography>
					<div className="buttonGroup">
						<Link to="/Blog">
							<Button variant="contained">Read Blog</Button>
						</Link>
						<Button variant="contained">Python Note</Button>
					</div>
				</Box>
			</div>
		</div>
	);
}
