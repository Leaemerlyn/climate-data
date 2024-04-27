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
						Welcome Reader! Our project explores the wonderful
						climate dataset from Berkeley Earth. We use our climate
						dataset to investigate key questions, such as looking at
						how climate is correlated with human and non-human (ie.
						natural phenomena) factors. Our analysis looks at
						temperatures from countries, and our data points span
						across nearly 250 years.
						<br />
						<br />
						Our project will look at several case studies, including
						but not limited to, how a country’s absolute tax
						revenue, tax revenue in relation to GDP, and country’s
						capitalistic index correlates with their temperature,
						and how historical natural phenomena such as volcanic
						eruptions and climate patterns (ie. El Nino and
						La Nina) changed the trajectory of a country’s weather.
						<br />
						<br />
						In our final analysis, we present a time-series analysis
						by creating a forecasting model using Seasonal ARIMA and
						Meta Research’s Prophet package. Given a location, a
						future month, and a future year, our models make a
						prediction about the given location’s temperature at the
						given time. <br />
						<br />
						We’re excited to present our findings to you, the
						reader, so thanks for stopping by!
					</Typography>
					<div className="buttonGroup">
						<Link to="/Blog">
							<Button variant="contained">Read Blog</Button>
						</Link>
						<Button
							variant="contained"
							href="https://colab.research.google.com/drive/1GFrKDCUyf-Mw6vUDgcCVC4CmQ16V7tVB?usp=sharing"
							target="_blank"
						>
							Python Note
						</Button>
					</div>
				</Box>
			</div>
		</div>
	);
}
