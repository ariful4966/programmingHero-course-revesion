import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpmeCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JM4OyEZ2Er3eAJmVM5XQZh5riwnOfQyhTD6RQHfP94rkWtb2wJiZLBmtNZtNhn6Jd4oat4WRFcnt92NzTwHMLrS005INPWW1a');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default PaymentProcess