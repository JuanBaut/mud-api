import { Schema, model } from 'mongoose';

const scheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'carrier'],
    default: 'carrier',
    required: true,
  },
  signup_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['enabled', 'disabled', 'deleted'],
    default: 'enabled',
  },

  vehicle: {
    type: String,
    required: false,
  },
  path: {
    type: [{ lat: Number, lng: Number }],
    default: [],
    required: false,
  },
  password_code: {
    type: String,
    required: false,
    default: null,
  },
});

const Users = model('Users', scheme);

export default Users;
