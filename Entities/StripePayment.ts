export type StripePayment = {
  user_id: string;
  user_email: string;
  stripe_session_id?: string;
  stripe_payment_intent_id?: string;
  amount: number;
  currency?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'canceled';
  payment_date?: string;
  plan_type?: 'premium_monthly' | 'premium_yearly';
}; 