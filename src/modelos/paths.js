import { Schema, model } from 'mongoose';

const scheme = new Schema({
  admin_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  carrier_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: false,
  },
  departure: {
    type: { type: String, enum: ['Address'], required: true },
    address: { type: String, required: true },
  },
  stops: [
    {
      type: { type: String, enum: ['Address'] },
      address: { type: String },
    },
  ],
  destination: {
    type: { type: String, enum: ['Address'], required: true },
    address: { type: String, required: true },
  },
  info: { type: String },
  origin_date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['ongoing', 'completed', 'canceled'],
    default: 'en curso',
  },
  // ETA: { type: Date },
  // estimated time arrival = tiempo estimado de llegada
});

const Paths = model('Paths', scheme);

export default Paths;
