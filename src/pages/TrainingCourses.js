import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Container, TextContainer, Header} from '../ComponentStyles'


const TrainingCourses = () => {
    return (

        <Container>
            <Header>Training Courses</Header>

            <h3 style={{ paddingTop: '3vh', paddingBottom: '5vh', padding: '10px', width: '75%' }}>Truman Enterprise Narrowboat Trust is an approved training centre for courses accredited by the National Community
                Boats Association (NCBA). The Trust has a qualified trainer to deliver these courses.</h3>

            <h3 style={{ paddingTop: '3vh', paddingBottom: '5vh', padding: '10px', width: '75%' }}>The Courses Offered are :-</h3>

            <TextContainer>
                <h4 style={{ paddingBottom: '10px'}}>Boat Handling</h4>
                <li>This course is delivered by an approved NCBA trainer in preparation for a group taking a boat out on the inland waterways of the UK.
                    The course is designed to minimise potential risks and provide a level of knowledge and skill to the boat operators, helping to ensure a safe,
                    enjoyable boating experience.  With a focus on steering a boat, casting off, coming alongside and mooring up, you will be taught how to navigate
                    a lock and turn the boat in a suitable place.  This course is ideal for anyone wanting to develop or improve their boat handling skills.</li><br />
                <h4 style={{ paddingBottom: '10px'}}>Community Crew Course</h4>
                <li>All trust crew members have this qualification.  It is a good introduction to community boating and Trust procedures.  The course enables people with
                    and without boating experience to become familiar with the Trust's boats.  It enables volunteers to work with a skipper as an effective crew member.
                    It includes steering, working locks, emergency procedures, communication, preparing a boat for a trip and closing it down afterwards.</li><br />
                <h4 style={{ paddingBottom: '10px'}}>Certificate in Community Boat Management</h4>
                <li>All Trust skippers have this qualification.  It enables volunteers to take full control of running a safe boat trip and managing any situation that arises.  
                    The aim of the course is to give operators of the boats on non-tidal waterways training in boat handling, boat maintenance and the management of group 
                    safety and welfare.  It is however, expected that you will have some experience of working with groups and have previous practical experience of boating 
                    and boat handling.  Successful candidates qualify to operate boats with a maximum of 12 passengers, on non-tidal waterways in the UK.</li><br />

                    <h4 style={{ paddingBottom: '10px'}}>For more details, Contact David Leaper on <a href="tel:07971 191786">07971 191786</a></h4>
                <a href="mailto:trainer@truman-enterprise.org.uk?body=My custom mail body">trainer@truman-enterprise.org.uk</a><br />

            </TextContainer>
            





        </Container>

    );
};

export default TrainingCourses;
