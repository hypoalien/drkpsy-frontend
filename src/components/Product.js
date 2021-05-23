import React from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
// import Rating from './Rating'
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.js";

import {GoLocation as LocationIcon} from 'react-icons/go'
import {BiRupee as PriceIcon} from 'react-icons/bi'
import "../style.css"

const Title = tw.h5`text-2xl font-bold`;
const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;

const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
// const RatingsInfo = styled.div`
//   ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
//   svg {
//     ${tw`w-6 h-6 text-yellow-500 fill-current`}
//   }
// `;
// const Rating = tw.span`ml-2 font-bold`;

// const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
                

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
                        
// const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
// const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
// const Title = tw.h5`text-2xl font-bold`;
 //const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
 const Card = styled.div`
 ${tw`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`}
 &{
   margin:10px
 }`;


const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);





const Product = ({ product }) => {
  return (
    // <Card className='my-3 p-3 rounded'>
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant='top' />
    //   </Link>

    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as='div'>
    //       <Rating
           
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>

    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
              <Card className='home-card' >
               <CardImage imageSrc={product.image} />
               <TextInfo>
                 <TitleReviewContainer>
                   <Title className="product-name">{product.name}</Title>
                   
                 </TitleReviewContainer>
                 <SecondaryInfoContainer>
                   <IconWithText>
                     <IconContainer>
                       <LocationIcon />
                     </IconContainer>
                     <Text>{product.location}</Text>
                   </IconWithText>
                   <IconWithText>
                     <IconContainer>
                       <PriceIcon />
                     </IconContainer>
                     <Text>{product.price}</Text>
                   </IconWithText>
                 </SecondaryInfoContainer>
                 {/* <Description className="product-desc">{product.description}</Description> */}
               </TextInfo>
               <Link to={`/events/${product._id}`}>
               <PrimaryButton >Book Now</PrimaryButton>
               </Link>
              
             </Card>

  )
}

export default Product
