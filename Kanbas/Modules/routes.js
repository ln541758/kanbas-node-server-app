import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  };

  const findModulesByCourse = async (req, res) => {
    const { courseCode } = req.params;
    const modules = await dao.findModulesByCourse(courseCode);
    res.json(modules);
  };

  const createModule =  async (req, res) => {
    const { courseCode } = req.params;
    const newModule = {
      ...req.body,
      course: courseCode
    };
    const createdModule = await dao.createModule(newModule);
    res.send(createdModule);
  };
  
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  };
  
  app.delete("/api/modules/:mid", deleteModule);
  app.get("/api/courses/:courseCode/modules", findModulesByCourse);
  app.post("/api/courses/:courseCode/modules", createModule);
  app.put("/api/modules/:mid", updateModule);
}