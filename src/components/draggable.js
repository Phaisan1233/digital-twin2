import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Draggable from "react-draggable";

const mystyle = {
  textAlign: "center",
  height: "500px",
};

export default function draggable() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={"auto"} sm={10}>
        <Paper style={mystyle}></Paper>
      </Grid>
      <Grid item xs={"auto"} sm={2}>
        <Paper style={mystyle} className={"fuck"}>
          <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
            bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}>
            <div>
              <div className="handle">Drag from here</div>
            </div>
          </Draggable>
        </Paper>
      </Grid>
    </Grid>
  );
}
