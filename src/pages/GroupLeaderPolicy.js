import React from "react";
import { makeStyles } from "@material-ui/core";
import { textAlign } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import BookYourTrip from './BookYourTrip'

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    padding: '15px'
  },
  header: {
    fontSize: "30px",
    paddingTop: "30px",
    textAlign: "center",
    paddingBottom: "25px",
    alignItems: "center",
  },
  ul: {
    fontSize: "15px",
    listStyleType: 'square',
    textAlign: "center",
    paddingBottom: "25px",
    paddingLeft: "35px",
    paddingRight: "35px",
  },
});

const groupLeaderData = [
  "Booking the trip and paying for it at least 28 days in advance",
  "Arranging transport to and from the boatyard and arriving on time",
  "Ensuring there are no more than 2 passengers who need to stay in wheelchairs",
  "Deciding whether trip is smoking or non-smoking",
  "Following boat staff instructions",
  "Clear communication with the boat staff",
  "Transferring group members from vehicles to the boat and back",
  "Making a passenger list and signing the safety briefing sheet",
  "Ensuring passengers adhere to safety procedures as explained in the pre-trip briefing",
  "Making drinks and washing up",
  "Supervising group members vigilantly particularly when using the ramp, lift, stairs and front deck",
  "Lunch arrangements",
  "In advance of trip booking group into pub for lunch (if applicable)",
  "Making a list of chip shop menu choices (if applicable) and phoning through order while on trip",
  "Collecting money for fish and chips (if applicable)",
  "Supervising group members if necessary in the toilet",
  "Supervising any children in the group",
  "Liaising with boat staff",
  "Taking complete responsibility for passengers when they are off the boat",
  "Administering first aid to passengers if needed",
  "Aiding boat staff as instructed in the event of an emergency",
];


const GroupLeaderPolicy = () => {
  const navigate = useNavigate()
  const goBack = () => { navigate(-1);}
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>Group Leader Policy</div>
      <div style={{ paddingBottom: '15px'}}>
        {groupLeaderData.map((task) => <li key={task}>{task}</li>)}
        <br />
        <button style={{ background: '#9FDDA8'}}onClick={goBack}>GO BACK</button>
      </div>
    </div>
  );
};

export default GroupLeaderPolicy;
