# ExpressTrack

_npm start_

Crear Usuario
---
POST /user/create

``` json
{
  "nombre": "Juan",
  "apellido": "Perez",
  "email": "juan.perez@example.com",
  "contrasena": "password123",
  "dni": "12345678",
  "rol": "administrador"
}
```

Crear ruta
---
POST /rutas

``` json
{
  "id_usuario_creador": "6627fbc9aaff8baab215b397",
  "origen": "123 Main Street, San Francisco, CA, USA",
  "destino": "456 Elm Street, New York, NY, USA",
  "puntos_intermedios": [
    "789 Oak Street, Chicago, IL, USA",
    "1011 Pine Street, Los Angeles, CA, USA"
  ],
  "descripcion": "Ruta de entrega de paquete desde San Francisco a Nueva York",
  "estado": "en curso"
}
```

Asignar ruta a repartidor
---
POST /api/rutas/asignar-repartidor

``` json
{
  "rutaId": "664cb2b0e9452d5080b1eb30",
  "repartidorId": "664ba5509a8d8ed2b236f6fd"
}
```

Obtener todas las rutas
---
GET /api/rutas

Eliminar ruta
---
DELETE /api/rutas/ID_DE_LA_RUTA

Crear vehiculo
---
POST /vehicles/create

```json
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "placa": "ABC123",
  "tipo": "sedán",
  "capacidad": 5,
  "estado": "disponible",
  "ubicacion_actual": "Ciudad",
  "fecha_mantenimiento": "2024-05-24"
}
```

Obtener vehiculos
---
GET /vehicles

Eliminar un vehiculo
---
DELETE /vehicles/delete/ID_DEL_VEHICULO

Actualizar un vehiculo
---
PUT /vehicles/update/664cbcd1ae4120debaf3ff53

```json 
{
  "estado": "en uso"
}
```
