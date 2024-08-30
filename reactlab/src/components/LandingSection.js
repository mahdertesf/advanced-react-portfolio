import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mahder!";
const bio1 = "An Aspiring frontend developer at Google";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <div>
    <img style={{borderRadius:"14em"}} src="https://i.pravatar.cc/150?img=7" alt="My photo"/>
    <p>{greeting}</p>
    </div>
   <div style={{textAlign:"center", fontSize:"1.4rem" }}>
   <p>{bio1}</p>
   <p>{bio2}</p>
   </div>

  </FullScreenSection>
);

export default LandingSection;
