const express = require("express");
const router = express.Router();
const {
  AdmEvol,
  SimaEvol,
  FacilitarEvol,
  AmuprobaEvol,
  AdmSoc,
  AmuprobaSoc,
  FacSoc,
  SimaSoc,
  ResumenSima,
  ResumenAdm,
  SimaCarg,
  SimaPres,
  FacCarg,
  FacPres,
  AmupCarg,
  AmupPres,
  AdmCarg,
  AdmPres,
  Admins,
} = require("../model/ModelDatosEvol"); // Asegúrate
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Endpoint
router.get("/admins/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id:", id);

  try {
    const admin = await Admins.findById(id);
    

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    console.log("admin:", admin.username);
    res.json({ username: admin.username }); // Fix: use 'admin.username' instead of 'Admins.username'
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
    console.log("NO SE QUE PINGO PASO:", error);
  }
});

router.post("/users", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await Admins.create({
      username,
      password: hashedPassword,
    });
    res.json(user);
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({ error: "Error registering user" });
  }
});

// Endpoint
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar admin por username
    const admin = await Admins.findOne({ username }); // Fix: use 'Admins.findOne' instead of 'Admin.findOne'

    if (!admin) {
      return res
        .status(401)
        .json({ mensaje: "Usuario o contraseña inválidos" });
    }

    // Comparar contraseñas
    const match = await bcrypt.compare(password, admin.password); // Fix: use 'admin.password' instead of 'Admin.password'

    if (!match) {
      return res
        .status(401)
        .json({ mensaje: "Usuario o contraseña inválidos" });
    }

    // Generar JWT
    const payload = { userId: admin._id }; // Fix: use 'admin._id' instead of 'Admin._id'
    const token = jwt.sign(payload, "secreta", { expiresIn: "1h" });
    console.log(token);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});

router.get("/buscar-datos", async (req, res) => {
  try {
    const dni = req.query.dni;
    const resultados = {
      AdmEvol: await buscarEnModelo(AdmEvol, dni),
      AmupEvol: await buscarEnModelo(AmuprobaEvol, dni),
      FacEvol: await buscarEnModelo(FacilitarEvol, dni),
      SimaEvol: await buscarEnModelo(SimaEvol, dni),
    };

    // Verifica si hay resultados para cada modelo y devuelve solo los que tienen resultados
    const response = {};
    for (const modelName in resultados) {
      if (resultados[modelName].length > 0) {
        response[modelName] = resultados[modelName];
      }
    }

    if (Object.keys(response).length > 0) {
      res.json(response);
    } else {
      res.json({
        message: "No se encontraron datos para el DNI proporcionado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar los datos" });
  }
});
// Función para buscar en un modelo específico

async function buscarEnModelo(Modelo, dni) {
  try {
    const data = await Modelo.find({ NumDoc: dni });
    return data;
  } catch (error) {
    // Manejar errores aquí si es necesario
    console.error("Error en la búsqueda del modelo:", error);
    return [];
  }
}

router.get("/buscar-afiliado", async (req, res) => {
  try {
    const dni = req.query.dni;
    const resultados = {
      AdmSoc: await buscarEnModeloAfi(AdmSoc, dni),
      AmupSoc: await buscarEnModeloAfi(AmuprobaSoc, dni),
      FacSoc: await buscarEnModeloAfi(FacSoc, dni),
      SimaSoc: await buscarEnModeloAfi(SimaSoc, dni),
    };

    // Verifica si hay resultados para cada modelo y devuelve solo los que tienen resultados
    const response = {};
    for (const modelName in resultados) {
      if (resultados[modelName].length > 0) {
        response[modelName] = resultados[modelName];
      }
    }

    if (Object.keys(response).length > 0) {
      res.json(response);
    } else {
      res.json({
        message: "No se encontraron datos para el DNI proporcionado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar los datos" });
  }
});
// Función para buscar en un modelo específico
router.get("/buscar-resu", async (req, res) => {
  try {
    const dni = req.query.dni;
    const resultados = {
      ResumenSima: await buscarEnModeloAfi(ResumenSima, dni),
      ResumenAdm: await buscarEnModeloAfi(ResumenAdm, dni),
    };

    // Verifica si hay resultados para cada modelo y devuelve solo los que tienen resultados
    const response = {};
    for (const modelName in resultados) {
      if (resultados[modelName].length > 0) {
        response[modelName] = resultados[modelName];
      }
    }

    if (Object.keys(response).length > 0) {
      res.json(response);
    } else {
      res.json({
        message: "No se encontraron datos para el DNI proporcionado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar los datos" });
  }
});

router.get("/buscar-prest", async (req, res) => {
  try {
    const dni = req.query.dni;
    const resultados = {
      SimaPres: await buscarEnModeloAfi(SimaPres, dni),
      AdmPres: await buscarEnModeloAfi(AdmPres, dni),
      FacPres: await buscarEnModeloAfi(FacPres, dni),
      AmupPres: await buscarEnModeloAfi(AmupPres, dni),
    };

    // Verifica si hay resultados para cada modelo y devuelve solo los que tienen resultados
    const response = {};
    for (const modelName in resultados) {
      if (resultados[modelName].length > 0) {
        response[modelName] = resultados[modelName];
      }
    }

    if (Object.keys(response).length > 0) {
      res.json(response);
    } else {
      res.json({
        message: "No se encontraron datos para el DNI proporcionado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar los datos" });
  }
});

router.get("/buscar-carg", async (req, res) => {
  try {
    const dni = req.query.dni;
    const resultados = {
      SimaCarg: await buscarEnModeloAfi(SimaCarg, dni),
      AdmCarg: await buscarEnModeloAfi(AdmCarg, dni),
      FacCarg: await buscarEnModeloAfi(FacCarg, dni),
      AmupCarg: await buscarEnModeloAfi(AmupCarg, dni),
    };

    // Verifica si hay resultados para cada modelo y devuelve solo los que tienen resultados
    const response = {};
    for (const modelName in resultados) {
      if (resultados[modelName].length > 0) {
        response[modelName] = resultados[modelName];
      }
    }

    if (Object.keys(response).length > 0) {
      res.json(response);
    } else {
      res.json({
        message: "No se encontraron datos para el DNI proporcionado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al buscar los datos" });
  }
});

async function buscarEnModeloAfi(Modelo, dni) {
  try {
    const data = await Modelo.find({ NumeroDeDoc: dni });
    return data;
  } catch (error) {
    // Manejar errores aquí si es necesario
    console.error("Error en la búsqueda del modelo:", error);
    return [];
  }
}

module.exports = router;
