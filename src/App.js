import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import "./App.css";
import React from "react";
import { ClimateViz } from "./ClimateViz";
import { Nav } from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./Blog";
import { About } from "./About";

function App(props) {
	return (
		<>
			<BrowserRouter>
				<Nav props={props} />
				<Box component="main" sx={{ width: "100%" }}>
					<Toolbar />
					<Routes>
						<Route path="/blog" element={<Blog/>} />
						<Route path="/dataviz" element={<ClimateViz />} />
                        <Route path="/about" element={<About/>} />
					</Routes>
				</Box>
			</BrowserRouter>
		</>
	);
}

export default App;
