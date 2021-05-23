import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
// import HeroSection from '../components/HeroSection'
// import InfoSection from '../components/InfoSection';
import { SectionHeading } from "../components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js";
import tw from "twin.macro";
import { motion } from "framer-motion";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/Data';
// import { Container } from 'react-bootstrap'
import "../style.css"

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;


const EventScreen = ({ match }) => {
  const  heading = "Trending Events"
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  // const firstcard={...homeObjOne,...products[0]}
  // const secondcard={...homeObjTwo,...products[1]}
  // const thirdcard={...homeObjThree,...products[2]}

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
     
    <>
    
     
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <> 
          <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
     
        </HeaderRow>
          <TabContent >
            {products.map((product) => (
              <Product product={product}/>
             
            ))}
          </TabContent>
        
      </ContentWithPaddingXl>
     
    </Container>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
       
          
        </>
      )}
     
     
      
    </>
  )
}

export default EventScreen
