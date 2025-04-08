const express = require('express');
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe
} = require('../controllers/recipeController');

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);

module.exports = router;
