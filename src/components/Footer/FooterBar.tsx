import { Link, Typography } from "@mui/material";
import * as React from "react";

export function FooterBar() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="http://localhost:3000">
          Online Resume
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    );
  }
  