import {
	Button,
	FormControl,
	InputLabel,
	Select,
	Box,
	OutlinedInput,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { getGraph } from "./requestHandler/requestHandler";
import { countries } from "./data/data";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export function ClimateViz() {
	const [image, setImage] = React.useState("");
	const [selectCountries, setCountries] = React.useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setCountries(typeof value === "string" ? value.split(",") : value);
	};

	const handleButtonClick = async (event) => {
		const myImage = await getGraph(selectCountries);
		setImage(myImage);
	};

	return (
		<>
			<Typography textAlign={"center"} variant="h5" my={4}>
				Visualize our dataset!
			</Typography>
			<Typography textAlign={"center"}>
				{" "}
				Select one or more countries to view their temperature year over
				year
			</Typography>
			<div id="graphing_ui">
				<FormControl sx={{ m: 3, width: 350 }}>
					<InputLabel>countries</InputLabel>
					<Select
						labelId="demo-multiple-checkbox-label"
						id="demo-multiple-checkbox"
						multiple
						value={selectCountries}
						onChange={handleChange}
						input={<OutlinedInput label="countries" />}
						renderValue={(selected) => selected.join(", ")}
						MenuProps={MenuProps}
					>
						{countries.map((name) => (
							<MenuItem key={name} value={name}>
								<Checkbox
									checked={selectCountries.indexOf(name) > -1}
								/>
								<ListItemText primary={name} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button
					variant="contained"
					size="medium"
					onClick={handleButtonClick}
					sx={{ margin: "24px" }}
				>
					Graph!
				</Button>
			</div>
			<div id="graphTempContainer">
				{image == "" ? (
					<></>
				) : (
					<>
						<img src={"data:image/png;base64, " + image}></img>
					</>
				)}
			</div>
		</>
	);
}
