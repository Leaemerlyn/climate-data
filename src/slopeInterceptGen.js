import React from "react";
import { slopeIntercept } from "./data/slopeIntercept";
import {
	Button,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";

function getTemp(year, slope, intercept) {
	return slope * year + intercept;
}


export function SlopeInterceptGen() {
	const countries = Object.keys(slopeIntercept);
	const [country, setCountry] = React.useState("");
	const [year, setYear] = React.useState(0);
	const [computedTemp, setComputedTemp] = React.useState(0);

	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	const handleOnChange = (event) => {
		setYear(event.target.value);
	};

	const handleCompute = (event) => {
		const temp = getTemp(
			year,
			slopeIntercept[country]["slope"],
			slopeIntercept[country]["intercept"]
		);
		console.log("temp", temp);
		setComputedTemp(temp);
	};

	return (
		<div id="graphing_ui">
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Country
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={country}
						label="Country"
						onChange={handleChange}
					>
						{countries.map((country) => (
							<MenuItem value={country}>{country}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			<TextField
				id="outlined-basic"
				label="Year"
				variant="outlined"
				onChange={handleOnChange}
			/>
			<Button onClick={handleCompute}>compute</Button>
			<br></br>
			<p>{computedTemp}</p>
		</div>
	);
}
