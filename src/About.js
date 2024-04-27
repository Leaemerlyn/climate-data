import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import lea from "./images/lea.jpg";
import dog from "./images/dog.png";
import Toolbar from "@mui/material/Toolbar";
import leven from "./images/leven.png";
import derek from "./images/derek.JPG";
import "./About.css";

export function About() {
	return (
		<div className="aboutContainer">
			<Card className="card">
				<CardMedia component="img" alt="lea" height="300" image={lea} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lea Emerlyn
					</Typography>
					<Typography variant="body2" color="text.secondary">
						I'm a creative tech engineer with background in computer
						science and Human-Computer Interaction. Thanks for
						visting our blog!
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" href="mailto:leaemerlyn@gmail.com">
						Email
					</Button>
					<Button
						size="small"
						href="https://www.linkedin.com/in/lea-emerlyn-7b8170168/"
						target="_blank"
					>
						LinkedIn
					</Button>
				</CardActions>
			</Card>

			<Card className="card">
				<CardMedia
					component="img"
					alt="leven"
					height="300"
					image={leven}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Leven Cai
					</Typography>
					<Typography variant="body2" color="text.secondary">
						I’m a former math and science teacher with an interest
						in data analytics. I’m currently exploring career
						trajectories in the data field. I hope you enjoy reading
						through our analysis of local and global temperatures
						from the past few hundred years.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" href="mailto:levencai@seas.upenn.edu">
						Email
					</Button>
					<Button
						size="small"
						href="https://www.linkedin.com/in/208cai5099/"
						target="_blank"
					>
						LinkedIn
					</Button>
				</CardActions>
			</Card>

			<Card className="card">
				<CardMedia
					component="img"
					alt="dog"
					height="300"
					image={derek}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Derek Chen
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Climate enthusiast with an eye to all things big data!
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" href="mailto:derche@seas.upenn.edu">
						Email
					</Button>
					<Button
						size="small"
						href="https://www.linkedin.com/in/dkcn/"
						target="_blank"
					>
						LinkedIn
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
