import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <div>
      
      <VStack  borderRadius="0.7rem" bg="white" textColor="black" alignItems="flex-start">
      <img style={{borderRadius:"0.7rem"}} src={imageSrc} alt="product image"/>
      <div style={{padding:"0.6rem"}}>
      <VStack alignItems="flex-start">
      <h1 style={{fontWeight:"bold"}}>{title}</h1>
      <p>{description}</p>
      <p> See More<FontAwesomeIcon icon={faArrowRight} size="1x"/></p>
      </VStack>
      
      </div>
                
      
      
      </VStack>
    </div>
  )
};

export default Card;
