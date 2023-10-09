import { Link, Typography } from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import { AppConfigContext } from "../../appConfig";

export function FooterBar() {
  const config = useContext(AppConfigContext);
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="home">
          {config.siteName}
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    );
  }
  