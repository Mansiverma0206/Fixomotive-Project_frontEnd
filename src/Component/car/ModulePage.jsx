"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";


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

function getStyles(name, selectedOem, theme) {
  return {
    fontWeight: selectedOem === name
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const ModulePage = () => {

  return (
    <>
      <FormControl sx={{ m: 2, width: 300 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="caption" sx={{ ml: 1 , fontSize:15 }}>
            Module
          </Typography>
          
        </Box>

        <Select
          id="demo-multiple-name" 
          // value={selectedOem}
          // onChange={handleChange}
          input={<OutlinedInput label="MODULE" />}
          MenuProps={MenuProps}
        >
          {/* {oemList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedOem, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </>
  );
};

export default ModulePage;
