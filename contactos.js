//array de contactos
var contactos = [
  {
    id: 01,
    Nombre: "Miguel Angel",
    Apellidos: "Rios Martinez",
    Telefono: 3218482091,
    Ubicacion: { ciudad: "pasto", direccion: "mz2 cs4 pucalpa3" },
  },

  {
    id: 02,
    Nombre: "Mercedes Deyanira",
    Apellidos: "Martinez Montenegro",
    Telefono: 3218482090,
    Ubicacion: { ciudad: "pasto", direccion: "mz2 cs4 pucalpa3" },
  },

  {
    id: 03,
    Nombre: "Gabriel Hernando",
    Apellidos: "Rios Moreno",
    Telefono: 3135905094,
    Ubicacion: { ciudad: "pasto", direccion: "mz2 cs4 pucalpa3" },
  },
];

// nuevo contacto

function nuevoContacto(id, Nombre, Apellidos, Telefono, Ubicacion = {}) {
  let añadirContacto = {
    id: id,
    Nombre: Nombre,
    Apellidos: Apellidos,
    Telefono: Telefono,
    Ubicacion: Ubicacion,
  };
  contactos.push(añadirContacto);
}

/*
nuevoContacto(id, "nombre", "Su apellido", numero, { ciudad: "", direccion: ""});
*/

//borrar contacto

function borrarContacto(id) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].id === id) {
      contactos.splice(i, 1);
    }
  }
  console.log(contactos);
}

//borrarContacto(02);
