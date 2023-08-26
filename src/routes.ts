import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoriesController";
import { CreateProductCategorie } from "./controllers/CreateProduct_CategoriesController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";
import { FindProductController } from "./controllers/FindProductController";
import { FindCategoryController } from "./controllers/FindCategoryController";


const router = Router ();
  
const createCategoriesController = new CreateCategoryController ();
const createProductController = new CreateProductController ();
const createProductCategoryExist = new CreateProductWithExistCategory ();



router.post ("/product",createProductController.handle )
router.post ("/categorias",createCategoriesController.handle )
router.post ("/createCategory", new CreateProductCategorie ().handle)

router.post ("/prouctWithCategory", createProductCategoryExist.handle)

router.post ("/find", new FindProductController ().handle)
router.post ("/findCategory", new FindCategoryController ().handle)
router.get ("/", (req,res) => {
    res.json ("tudo ok")
})
export {router}