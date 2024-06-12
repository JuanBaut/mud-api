import { Schema, model } from 'mongoose';

const scheme = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  placa: { type: String, unique: true, required: true },
  tipo: { type: String, required: true },
  capacidad: { type: Number, required: true },
  estado: {
    type: String,
    enum: ['disponible', 'en uso', 'mantenimiento'],
    default: 'disponible',
  },
  ubicacion_actual: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] },
  },
  fecha_mantenimiento: { type: Date },
});

const Car = model('Vehicle', scheme);

export default Car;
