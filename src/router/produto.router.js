const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll:id", authMiddleware, produtoController.findAllProductsController);

router.post("/create", authMiddleware, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, produtoController.addCategoriaProdutoCottroller);

router.put("/update/:id", authMiddleware, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, produtoController.removeCategoriaProdutoCottroller);

module.exports = router;