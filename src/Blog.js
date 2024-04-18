import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const Blog = () => {
	return (
		<Container maxWidth="xl" sx={{ maxWidth: "1200px" }}>
			<Toolbar />
			<Typography variant="h3">Blog Post Can Go HERE</Typography>
			<Typography variant="body1">test another</Typography>
			<Divider />
		</Container>
	);
};
