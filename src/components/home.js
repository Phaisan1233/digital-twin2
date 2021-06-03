import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableList from "./draggableList.js";
import { lightGreen } from "@material-ui/core/colors";
// import DragAndDropContext from "./dragAndDrop/context";
import DraggableContext from "./draggable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  paper3: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "500px",
  },
  paper2: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "150px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={"auto"} sm={2}>
          <Paper className={classes.paper}>
            <h1>Directory</h1>
          </Paper>
        </Grid>
        <Grid item xs={"auto"} sm={10}>
          <Grid container spacing={1}>
            <Grid item xs={"auto"} sm={12}>
              <div className={classes.paper3}>
                <DraggableContext></DraggableContext>
              </div>
            </Grid>

            <Grid item xs={"auto"} sm={12}>
              <Paper className={classes.paper2}>
                <h1>Command line</h1>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>

    // <div className={classes.root}>
    //   <Grid container spacing={1}>
    //     <Grid item xs={"auto"} sm={2}>
    //       <Paper className={classes.paper}>
    //         <h1>Directory</h1>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={"auto"} sm={10}>
    //       <Paper className={classes.paper}>
    //         <DraggableList></DraggableList>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={"auto"} sm={2}>
    //       <Paper className={classes.paper}>
    //         <h1>Function</h1>
    //         <DraggableList></DraggableList>
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}
