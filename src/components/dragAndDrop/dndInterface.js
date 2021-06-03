import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./Container";
import Grid from "@material-ui/core/Grid";
import Box from "./Box";
import Paper from "@material-ui/core/Paper";
import Dustbin from "./Dustbin";

export default function dndInterface() {
  return (
    <div className="App" style={{ padding: "0px" }}>
      <DndProvider backend={HTML5Backend}>
        <Dustbin greedy={false}>
          <Grid container spacing={1}>
            <Grid item xs={"auto"} sm={9}>
              <Container hideSourceOnDrag={true} />
            </Grid>
            <Grid item xs={"auto"} sm={3}>
              <Paper style={{ height: "100%" }}>
                <div>
                  <Box key={1} id={1} left={20} top={10} hideSourceOnDrag={false}>
                    Yolo
                  </Box>
                </div>
              </Paper>
            </Grid>
          </Grid>{" "}
        </Dustbin>
      </DndProvider>
    </div>
  );
}
