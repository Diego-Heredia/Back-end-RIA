import { pool } from "../db.js";

export const getColaborador = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Colaborador");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const getEquipo = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Equipo");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const getLider = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Lider");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const getPlanificador = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Planificador");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.status(201).json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const createColaborador = async (req, res) => {
  try {
    const {
      ID,
      Nombre,
      Apellido_pat,
      Apellido_mat,
      Correo,
      Telefono,
      Imagen,
      IDLider,
    } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Colaborador (ID, Nombre, Apellido_pat, Apellido_mat, Correo, Telefono, Imagen, IDLider) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        ID,
        Nombre,
        Apellido_pat,
        Apellido_mat,
        Correo,
        Telefono,
        Imagen,
        IDLider,
      ]
    );
    res
      .status(201)
      .json({
        id: rows.insertId,
        ID,
        Nombre,
        Apellido_pat,
        Apellido_mat,
        Correo,
        Telefono,
        Imagen,
        IDLider,
      });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
