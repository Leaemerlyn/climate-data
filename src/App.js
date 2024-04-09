import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Chip,
  Box,
  OutlinedInput,
  checkbox,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import "./App.css";
import { countries } from "./data/data";
import React from "react";
import { getGraph } from "./requestHandler/requestHandler";

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

function App() {
  const [selectCountries, setCountries] = React.useState([]);
  const [image, setImage] = React.useState("")

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  const handleButtonClick = async (event) => {
    const myImage = await getGraph(selectCountries)
    setImage(myImage)
  }


  return (
    <>
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
              <Checkbox checked={selectCountries.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" size="medium" onClick={handleButtonClick}>Graph!</Button>
    </div>
    <img src={"data:image/png;base64, " + image}></img>
    </>
  );
}

export default App;
