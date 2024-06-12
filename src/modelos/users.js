import { Schema, model } from 'mongoose';

const scheme = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: false,
    unique: true,
  },
  rol: {
    type: String,
    enum: ['administrador', 'repartidor'],
    default: 'repartidor',
    required: true,
  },
  fecha_registro: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: String,
    enum: ['activo', 'inactivo', 'eliminado'],
    default: 'inactivo',
  },
  vehiculo: {
    type: String,
    required: () => this.rol === 'repartidor',
    required: false,
  },
  ruta: {
    type: [{ lat: Number, lng: Number }],
    default: [],
    required: () => this.rol === 'repartidor',
  },
  cod_contrasena: {
    type: String,
    required: false,
    default: null,
  },
  datos_de_contacto: {
    telefono: {
      type: Number,
      required: false,
    },
    direccion: {
      type: String,
      required: false,
    },
  },
});

const Users = model('Users', scheme);

export default Users;
