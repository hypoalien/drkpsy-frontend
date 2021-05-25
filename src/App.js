import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ContactUsScreen from './screens/Contact'
import PrivacyScreen from './screens/Privacy'
import TermsScreen from './screens/Terms'
import RefundScreen from './screens/Refund'
import AboutScreen from './screens/About'
import EventsScreen from './screens/Events'

import "./style.css"

const App = () => {
  return (
    <Router>
      <Header/>
      <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
      <Route  path='/contact' component={ContactUsScreen} exact /> 
      <Route  path='/terms' component={TermsScreen} exact /> 
      <Route  path='/refund' component={RefundScreen} exact /> 
      <Route  path='/privacy' component={PrivacyScreen} exact /> 
      <Route  path='/about' component={AboutScreen} exact /> 
      <Route  path='/events' component={EventsScreen} exact /> 

      <Route  path='/' component={HomeScreen} exact /> 
      <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen}  />
          <Route path='/register' component={RegisterScreen} />
         
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/events/:id' component={ProductScreen} />
          
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/events/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} /> 
          <Route path='/order/:id' component={OrderScreen} />
      {/* < main className="py-3">
        <Container>
          
         
        
         
        </Container>
        
      </main> */}
      <Footer />
    </Router>
  )
}

export default App
