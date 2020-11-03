const express = require("express");
const CourseController = require("./controllers/CourseController");
const AwardController = require("./controllers/AwardController");
const EducationController = require("./controllers/EducationController");
const ExperienceController = require("./controllers/ExperienceController");
const SkillController = require("./controllers/SkillController");
const routes = express.Router();
//courses
routes.get("/courses", CourseController.index);
routes.get("/courses/:id", CourseController.show);
routes.post("/courses", CourseController.store);
routes.put("/courses/:id", CourseController.update);
routes.delete("/courses/:id", CourseController.destroy);
//awards
routes.get("/awards", AwardController.index);
routes.get("/awards/:id", AwardController.show);
routes.post("/awards", AwardController.store);
routes.put("/awards/:id", AwardController.update);
routes.delete("/awards/:id", AwardController.destroy);
//educations
routes.get("/educations", EducationController.index);
routes.get("/educations/:id", EducationController.show);
routes.post("/educations", EducationController.store);
routes.put("/educations/:id", EducationController.update);
routes.delete("/educations/:id", EducationController.destroy);
//experiences
routes.get("/experiences", ExperienceController.index);
routes.get("/experiences/:id", ExperienceController.show);
routes.post("/experiences", ExperienceController.store);
routes.put("/experiences/:id", ExperienceController.update);
routes.delete("/experiences/:id", ExperienceController.destroy);
// skills
routes.get("/skills", SkillController.index);
routes.get("/skills/:id", SkillController.show);
routes.post("/skills", SkillController.store);
routes.put("/skills/:id", SkillController.update);
routes.delete("/skills/:id", SkillController.destroy);

module.exports = routes;
