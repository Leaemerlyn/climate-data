import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import "./App.css";
import React from "react";
import { ClimateViz } from "./ClimateViz";
import { Nav } from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./Blog";
import { About } from "./About";
import { Landing } from "./Landing";
import { References } from "./References";

function App(props) {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Nav props={props} />
				<Box component="main" sx={{ width: "100%" }}>
					<Toolbar />
					<Routes>
                        <Route path="/" element={<Landing/>}/>
						<Route path="/Blog" element={<Blog/>} />
						<Route path="/DataViz" element={<ClimateViz />} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/References" element={<References/>}/>
					</Routes>
				</Box>
			</BrowserRouter>
		</>
	);
}

export default App;
