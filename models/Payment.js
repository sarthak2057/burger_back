import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  esewa_order_id: {
    type: String,
    required: true,
  },
  esewa_payment_id: {
    type: String,
    required: true,
  },
  esewa_signature: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model('Payment', PaymentSchema);
