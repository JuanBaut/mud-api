import { Schema, model } from 'mongoose';

const scheme = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  plate: { type: String, unique: true, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  status: {
    type: String,
    enum: ['available', 'in_use', 'maintenance'],
    default: 'available',
  },
  current_location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] },
  },
  maintenance_date: { type: Date },
});

const Car = model('Vehicle', scheme);

export default Car;
