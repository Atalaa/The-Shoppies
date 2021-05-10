import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/app.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
} from "@material-ui/core";
import { Whatshot, Theaters, EmojiEventsSharp } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

//Component imported from Material UI to have a bottom navigation - I customized a bit (routes, notifications, label and icons)
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#2980B9",
  },
  notifications: {
    transform: "translate(-320%, -10%)",
  },
});

export default function SimpleBottomNavigation({ nomineesCounter }) {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  const currentYear = new Date().getFullYear();

  let history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.replace("/");
    } else if (value === 1) {
      history.replace("/movies");
    } else if (value === 2) {
      history.replace("/nominees");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label={`Coming in ${currentYear}`}
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<Theaters />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Nominees"
        icon={<EmojiEventsSharp />}
      />

      <Badge
        classes={{ badge: classes.notifications }}
        badgeContent={nomineesCounter}
        color="secondary"
      />
    </BottomNavigation>
  );
}
