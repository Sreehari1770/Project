
import * as React from "react";
import Box from "@mui/material/Box";

export default function ColorChange(color) {
    console.log(color);
    return (
        <Box
            className="box"
            sx={{
                height: 300,
                background: color.bg,
                border: 2,
            }}
        />
    );
}