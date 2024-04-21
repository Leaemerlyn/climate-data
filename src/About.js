import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dog from "./images/dog.png";
import Toolbar from "@mui/material/Toolbar";
import "./About.css"

export function About() {
	return (
		<div className="aboutContainer">
			<Card className="card">
				<CardMedia component="img" alt="dog" height="200" image={dog} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lea Emerlyn
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" href="mailto:leaemerlyn@gmail.com">Email</Button>
					<Button size="small" href="https://www.linkedin.com/in/lea-emerlyn-7b8170168/" target="_blank">LinkedIn</Button>
				</CardActions>
			</Card>

            <Card className="card">
				<CardMedia component="img" alt="dog" height="200" image={dog} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Email</Button>
					<Button size="small">LinkedIn</Button>
				</CardActions>
			</Card>

            <Card className="card">
				<CardMedia component="img" alt="dog" height="200" image={dog} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Email</Button>
					<Button size="small">LinkedIn</Button>
				</CardActions>
			</Card>
		</div>
	);
};
