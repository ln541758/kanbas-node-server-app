import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });
  app.get("/api/courses/:courseCode/modules", async (req, res) => {
    const { courseCode } = req.params;
    const modules = await dao.findModulesForCourse(courseCode);
    res.json(modules);
  });


  app.post("/api/courses/:courseCode/modules", async (req, res) => {
    const { courseCode } = req.params;
    const newModule = {
      ...req.body,
      course: courseCode
    };
    const createdModule = await dao.createModule(newModule);
    res.send(createdModule);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  });
}