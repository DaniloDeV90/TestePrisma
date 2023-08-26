"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateProductController_1 = require("./controllers/CreateProductController");
const CreateCategoriesController_1 = require("./controllers/CreateCategoriesController");
const CreateProduct_CategoriesController_1 = require("./controllers/CreateProduct_CategoriesController");
const CreateProductWithExistCategory_1 = require("./controllers/CreateProductWithExistCategory");
const FindProductController_1 = require("./controllers/FindProductController");
const FindCategoryController_1 = require("./controllers/FindCategoryController");
const router = (0, express_1.Router)();
exports.router = router;
const createCategoriesController = new CreateCategoriesController_1.CreateCategoryController();
const createProductController = new CreateProductController_1.CreateProductController();
const createProductCategoryExist = new CreateProductWithExistCategory_1.CreateProductWithExistCategory();
router.post("/product", createProductController.handle);
router.post("/categorias", createCategoriesController.handle);
router.post("/createCategory", new CreateProduct_CategoriesController_1.CreateProductCategorie().handle);
router.post("/prouctWithCategory", createProductCategoryExist.handle);
router.post("/find", new FindProductController_1.FindProductController().handle);
router.post("/findCategory", new FindCategoryController_1.FindCategoryController().handle);
router.get("/", (req, res) => {
    res.json("tudo ok");
});
//# sourceMappingURL=routes.js.map