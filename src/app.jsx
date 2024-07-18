import './app.css'
import { CheckoutSteper } from './Components/CheckoutSteper'
const CHECKOUT_STEPS = [
  {
    name: "Customer info",
    Component : ()=> <div>Provide your contact details</div>
  },
  {
    name: "Shipping info",
    Component : ()=> <div>Enter your Shipping address</div>
  },
  {
    name: "Payment ",
    Component : ()=> <div>Complete payment for your order</div>
  },
  {
    name: "delivered ",
    Component : ()=> <div>Your order has been delivered</div>
  }
]


export function App() {


  return (
    <>
    <h1>Checkout</h1>
     <CheckoutSteper steps_config= {CHECKOUT_STEPS}/>
    </>
  )
}
