const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const module = {
  id: 1,
  name: "Module 1",
  description: "First Module",
  due: "2021-10-10",
  completed: false,
  score: 100,
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment.title);
  });
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
  app.get("/lab5/module/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module.name);
  });
  app.get("/lab5/module/:newScore", (req, res) => {
    const { newScore } = req.params;
    module.score = newScore;
    res.json(module.score);
  });
  app.get("/lab5/module/:isCompleted", (req, res) => {
    const { isCompleted } = req.params;
    module.completed = isCompleted;
    res.json(module.completed);
  });
}
