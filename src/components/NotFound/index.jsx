import React from 'react';
import {HoldMessageWrapper, HTTPError, HTTPMessage} from "./NotFound.style";

 const NotFound = () => {
   return (
     <HoldMessageWrapper>
       <HTTPError>404</HTTPError>
       <HTTPMessage>The requested url was not found</HTTPMessage>
     </HoldMessageWrapper>
   )
 };

 export default NotFound;
