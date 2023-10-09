import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";

const steps = [
  "Personal Details",
  "Contact Infomation",
  "Professional Summary",
];

const ResumeBuilderHome: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ field: "" });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ field: e.target.value });
  };

  const progress = (activeStep / steps.length) * 100;

  return (
    <Container maxWidth={false}>
      <Box style={{ width: "95vw" }}>
        <br />
        <Container
          style={{
            background: "silver",
            height: "20px",
            borderRadius: "10px",
            position: "relative", // Relative positioning for the container
          }}
        >
          <div
            style={{
              position: "absolute", // Absolute positioning for the div
              top: "50%", // Center it vertically
              left: "1%",
              right: "0",
              transform: "translateY(-50%)", // Adjust for the exact center
            }}
          >
            <LinearProgress
              variant="determinate"
              value={progress}
              style={{
                backgroundColor: "#ccc",
                height: "10px",
                borderRadius: "5px",
                width: "99%",
              }}
              color="secondary"
            />
          </div>
        </Container>
        <br />
        <br />
        <Grid container spacing={3} style={{ minHeight: "75vh" }}>
          <Grid item xs={12} md={2}>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              style={{
                background: "white",
                borderRadius: "10px",
                position: "relative",
                border: "1px grey solid",
                padding: "2%",
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Container
              style={{
                background: "white",
                borderRadius: "10px",
                border: "1px grey solid",
                minHeight: "100%",
              }}
            >
              <br/>
              <Typography variant="h6">{steps[activeStep]}</Typography>
              <TextField
                label="Sample Field"
                value={formData.field}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <Container
              style={{
                background: "white",
                borderRadius: "10px",
                border: "1px grey solid",
                minHeight: "100%",
              }}
            ></Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResumeBuilderHome;
