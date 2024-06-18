import { Schema, model } from 'mongoose';

const scheme = new Schema({
  // admin_id: {
  //  type: Schema.Types.ObjectId,
  //  ref: 'Users',
  //  required: true,
  // },
  carrierDni: {
    type: Schema.Types.String,
    ref: 'Users',
    required: false,
  },
  departure: {
    type: String,
    required: true,
  },
  stops: [{ type: String }],
  destination: {
    type: String,
    required: true,
  },
  notes: { type: String },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  origin_date: { type: Date, default: Date.now },
  // ETA: { type: Date },
  // estimated time arrival = tiempo estimado de llegada
});

const Paths = model('Paths', scheme);

export default Paths;
