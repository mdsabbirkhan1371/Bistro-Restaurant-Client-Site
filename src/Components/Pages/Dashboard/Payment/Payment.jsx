import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_KEY);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={'Make Payment&Get Food'}
        subHeading={'Payment Now'}
      ></SectionTitle>

      {/* from stripe  */}
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
