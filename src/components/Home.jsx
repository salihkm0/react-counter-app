import { Button, Grid, Slider, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [counterStep, setCounterStep] = useState(10);

  const handleIncrement = () => {
    setCounter(counter + counterStep);
  };
  const handleDecrement = () => {
    setCounter(counter - counterStep);
  };
  function valuetext(value) {
    return setCounterStep(value);
  }
  return (
    <>
      <Typography sx={HeadStyle} variant="h1">
        React Counter App
      </Typography>
      <Container sx={ContainerStyle}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {counter === 0 ? (
            <></>
          ) : (
            <Box sx={BoxStyle}>
              <Grid>
                <Typography sx={CounterStyle} variant="h3">
                  {counter - counterStep}
                </Typography>
              </Grid>
            </Box>
          )}

          <Box sx={MainBoxStyle}>
            <Grid>
              <Typography sx={CounterStyle} variant="h1">
                {counter}
              </Typography>
            </Grid>
          </Box>
          <Box sx={BoxStyle}>
            <Grid>
              <Typography sx={CounterStyle} variant="h3">
                {counter + counterStep}
              </Typography>
            </Grid>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={10}
          justifyContent="center"
          alignItems="center"
          margin={4}
        >
          <Button variant="outlined" onClick={handleDecrement}>
            <RemoveIcon />
          </Button>
          <Button variant="outlined" onClick={() => setCounter(0)}>
            Reset
          </Button>
          <Button variant="outlined" onClick={handleIncrement}>
            <AddIcon />
          </Button>
        </Stack>
        <Slider
          aria-label="Step"
          defaultValue={1}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={20}
        />
      </Container>
    </>
  );
}
const HeadStyle = {
  textAlign: "center",
  color: "#f77f00",
  fontFamily: "Roboto",
  fontSize: "60px",
  marginTop : '70px',
};
const ContainerStyle = {
  marginTop: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const MainBoxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  width: "200px",
  background: "#22223b",
  color: "white",
  borderRadius: "10px",
//   margin: "0 -10px",
  zIndex: "99",
  boxShadow: 'rgb(38, 57, 77) 10px 20px 30px -10px',
};
const BoxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "150px",
  width: "150px",
  background: "#47476c",
  color: "white",
  borderRadius: "10px",
  zIndex: "98",
  boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
};
const CounterStyle = {
  textAlign: "center",
};
