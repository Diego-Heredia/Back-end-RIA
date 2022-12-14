import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getColaborador,
  updateEmployee,
  getLider,
  getEquipo,
  getPlanificador,
  createColaborador,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Colaboradores
router.get("/colaborador", getColaborador);

// GET all Lideres
router.get("/lider", getLider);

// GET all Equipos
router.get("/equipo", getEquipo);

// GET all Colaboradores
router.get("/planificador", getPlanificador);

// GET An Employee
router.get("/employees/:id", getEmployee);

// DELETE An Employee
router.delete("/employees/:id", deleteEmployee);

// INSERT An Employee
router.post("/employees", createEmployee);

// INSERT An Colaborador
router.post("/colaborador", createColaborador);

// Update An Employee
router.patch("/employees/:id", updateEmployee);

export default router;
