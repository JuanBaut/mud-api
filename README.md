# ExpressTrack

comando para levantar server / db

_npm start_

## Crear Usuario

### Endpoint

POST http://localhost:3000/user/create

### Body

json
{
"nombre": "Juan",
"email": "juan1.perez@example.com",
"contrasena": "password123"
}

###Nota: el usuario creado es de rol repartidor por default

## Activar Usuario Manual desde panel

### Endpoint

PUT http://localhost:3000/user/create](http://localhost:3000/user/activate/:id

### Body

json
{
"estado": "activo"
}

###Nota: se podria activar mediante confirmacion y validacion de email.

## Crear Ruta

### Endpoint

POST http://localhost:3000/rutas

### Body

json
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

## Asignar Ruta a Repartidor

### Endpoint

POST http://localhost:3000/api/rutas/asignar-repartidor

### Body

json

{
"rutaId": "664cb2b0e9452d5080b1eb30",
"repartidorId": "664ba5509a8d8ed2b236f6fd"
}

## Obtener Todas las Rutas

### Endpoint

GET http://localhost:3000/api/rutas

## Eliminar Ruta

### Endpoint

DELETE http://localhost:3000/api/rutas/ID_DE_LA_RUTA

## CREAR VEHICULO

### Endpoint

POST http://localhost:3000/vehicles/create

### Body

json
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

## Asignar Vehiculo a Repartidor

### Endpoint

POST http://localhost:3000/vehicles/asignar

### Body

json
{
"\_id": "665dbc6ec9ec95e1741b207d",
"repartidorId": "665db685a5418f5d830ed6cf"
}

## Obtener vehiculos

### Endpoint

GET http://localhost:3000/vehicles

## Eliminar un vehiculo

### Endpoint

DELETE http://localhost:3000/vehicles/delete/ID_DEL_VEHICULO

## Actualizar un vehiculo

### Endpoint

PUT http://localhost:3000/vehicles/update/664cbcd1ae4120debaf3ff53

### Body

json
{
"estado": "en uso"
}
