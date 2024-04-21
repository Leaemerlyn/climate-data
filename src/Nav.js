import { Button, Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "./App.css";
const drawerWidth = 240;
const navItems = ["Blog Post", "Data Viz", "Team"];

export const Nav = (props) => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const { window } = props;

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Hot Topics
			</Typography>
			<Divider />
			<List>
            <Link to="/" style={{ textDecoration: "none" }}>
					<ListItem key="Home" disablePadding>
						<ListItemButton
							sx={{ textAlign: "center", color: "black" }}
						>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
				</Link>
				<Link to="/Blog" style={{ textDecoration: "none" }}>
					<ListItem key="blog" disablePadding>
						<ListItemButton
							sx={{ textAlign: "center", color: "black" }}
						>
							<ListItemText primary="Blog" />
						</ListItemButton>
					</ListItem>
				</Link>
				<Link to="/DataViz" style={{ textDecoration: "none" }}>
					<ListItem key="DataViz" disablePadding>
						<ListItemButton
							sx={{ textAlign: "center", color: "black" }}
						>
							<ListItemText primary="DataViz" />
						</ListItemButton>
					</ListItem>
				</Link>
                <Link to="/References" style={{ textDecoration: "none" }}>
					<ListItem key="References" disablePadding>
						<ListItemButton
							sx={{ textAlign: "center", color: "black" }}
						>
							<ListItemText primary="References" />
						</ListItemButton>
					</ListItem>
				</Link>
				<Link to="/About" style={{ textDecoration: "none" }}>
					<ListItem key="About" disablePadding>
						<ListItemButton
							sx={{ textAlign: "center", color: "black" }}
						>
							<ListItemText primary="About" />
						</ListItemButton>
					</ListItem>
				</Link>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{
							textDecoration: "none",
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
						}}
					>
						Hot Topics
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<Link to="/">
							<Button key="blog" sx={{ color: "#fff" }}>
								Home
							</Button>
						</Link>
						<Link to="/Blog">
							<Button key="blog" sx={{ color: "#fff" }}>
								Blog
							</Button>
						</Link>
						<Link to="/DataViz">
							<Button key="DataViz" sx={{ color: "#fff" }}>
								DataViz
							</Button>
						</Link>
                        <Link to="/References">
							<Button key="DataViz" sx={{ color: "#fff" }}>
								References
							</Button>
						</Link>
						<Link to="/About">
							<Button key="About" sx={{ color: "#fff" }}>
								About
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};
