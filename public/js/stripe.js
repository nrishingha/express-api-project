import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51J7Ko3SESIJbJP7wwgkuW7SDgEFwWSVmAnc10n3SQTJrhVyPVtWKXfChehHTgfiJXZHuZLrHLGpKD2XKP9kyyInr00ul1oEV8B'
    );

    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
