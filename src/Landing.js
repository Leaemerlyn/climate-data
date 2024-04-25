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
						how climate is influenced by human and non-human (ie.
						natural phenomena) actions. Our analysis looks at the
						temperatures spanning centuries across the globe. <br />
						<br />
						Our project will look at several case studies, including
						but not limited to, how a country’s capitalistic index,
						tax revenue, and tax revenue in relation to GDP impacts their temperature, and how
						historical events such as volcanic eruptions to climate
						weather patterns (ie. El Nino and La Nina) changed the
						trajectory of a country’s climate.
						<br />
						<br />
						In our final analysis, we present a time-series analysis
						by creating a forecasting model using Seasonal ARIMA and
						Facebook Research’s Prophet package. Our models make
						future predictions on a country’s temperature, given a
						year. <br />
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
