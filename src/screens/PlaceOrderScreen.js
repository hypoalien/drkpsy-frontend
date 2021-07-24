import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import {Container,Form, Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import Loader from '../components/Loader'

const PlaceOrderScreen = ({ history }) => {
  const [promo, setPromo] = useState('')
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const [showResults, setShowResults] = React.useState(false)
  const onClickLoad = () => setShowResults(true)

  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } else if (!cart.paymentMethod) {
    history.push('/payment')
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 0)
  var gst = Number((0.05 *0.18* cart.itemsPrice)).toFixed(2)
  cart.taxPrice = addDecimals(Number((0.05 * cart.itemsPrice).toFixed(2))+Number(gst))
  
  
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success])

  const promoHandler = (e) => {
    e.preventDefault()
    if (promo === "auf200"||promo ==="AUF200"||promo==="hypo200"||promo==="HYPO200") {
      setMessage('Promo applied get 200 off on checkout')
    } else {
      setMessage('Promo invalid')

    }
  }

  const placeOrderHandler = () => {

    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: 0,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
        promo:promo
      })
    )
  }

  return (
    <>
    < main className="py-3">
        <Container>
        <CheckoutSteps step1 step2 step3 step4 />
        {message && <Message variant='info'>{message}</Message>}
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>₹{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <Form onSubmit={promoHandler}>
              <Form.Group controlId='promo'>
          <Form.Label>Promocode</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Promo Code'
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Apply
        </Button>
              </Form>
           

              <ListGroup.Item>
                
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={()=>{
                    onClickLoad()
                    placeOrderHandler()}}
                >
                  Place Order
                </Button>
                { showResults ? <Loader /> : null }
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
        </Container>
      </main>
     
    </>
  )
}

export default PlaceOrderScreen
