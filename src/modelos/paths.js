import { Schema, model } from 'mongoose';

const scheme = new Schema({
  id_usuario_creador: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  id_repartidor_asignado: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: false,
  },
  origen: {
    type: { type: String, enum: ['Address'], required: true }, // Changed type to "Address"
    address: { type: String, required: true }, // Added address property
  },
  destino: {
    type: { type: String, enum: ['Address'], required: true }, // Changed type to "Address"
    address: { type: String, required: true }, // Added address property
  },
  puntos_intermedios: [
    {
      type: { type: String, enum: ['Address'] }, // Changed type to "Address"
      address: { type: String }, // Added address property
    },
  ],
  descripcion: { type: String },
  fecha_creacion: { type: Date, default: Date.now },
  estado: {
    type: String,
    enum: ['en curso', 'completada', 'cancelada'],
    default: 'en curso',
  },
  historial_estados: [
    {
      estado: {
        type: String,
        enum: ['en curso', 'completada', 'cancelada'],
      },
      fecha: { type: Date, default: Date.now },
    },
  ],
  tiempo_estimado_llegada: { type: Date },
});

const Paths = model('Paths', scheme);

export default Paths;
