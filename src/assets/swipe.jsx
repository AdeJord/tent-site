import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import { Crew } from "../components/CrewInfo";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Gerry from '../images/Gerry.jpg'


import item001 from "../images/Gerry.jpg";
import item002 from "../images/Gerry.jpg";
import item003 from "../images/Gerry.jpg";

const useStyles = makeStyles(() => {
  const baseStyle = {
    color: "white",
    height: "300px"
  };
  const activeBaseStyle = {
    color: "white",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };

  return {
    slide0: {
      ...baseStyle,
      backgroundColor: "skyblue"
    },
    slide1: {
      ...baseStyle,
      backgroundColor: "orange"
    },
    slide2: {
      ...baseStyle,
      backgroundColor: "indianred"
    },
    image: {
      width: "auto",
      height: "100%"
    },
    active0: {
      ...activeBaseStyle,
      backgroundColor: "lightseagreen"
    },
    active1: {
      ...activeBaseStyle,
      backgroundColor: "yellowgreen"
    },
    active2: {
      ...activeBaseStyle,
      backgroundColor: "pink"
    }
  };
});

const Swipe = () => {
  const [swipeableActions, setSwipeableActions] = React.useState();
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();
  const items = Crew
  const itemNames = ["Adrian Jordan", "Agata Tomaszewska", "Mariel Bishop", "Jennifer Christian"];

  const handleChange = index => {
    setTabIndex(index);
  };

  return (
    <React.Fragment>
      <Tabs
        value={tabIndex}
        onChange={(e, value) => handleChange(value)}
        variant="fullWidth"
        indicatorColor="primary"
      >
        {itemNames.map((itemName, i) => (
          <Tab
            className={tabIndex === i && classes[`active${i}`]}
            label={itemName}
          />
        ))}
      </Tabs>
      <SwipeableViews
        enableMouseEvents
        action={actions => setSwipeableActions(actions)}
        resistance
        animateHeight
        index={tabIndex}
        onChangeIndex={index => handleChange(index)}
      >
        {items.map((item, index) => (
          <div className={classes[`slide${index}`]}>
            <img className={classes.image} src={item} />
          </div>
        ))}
      </SwipeableViews>
    </React.Fragment>
  );
};
export default Swipe;
