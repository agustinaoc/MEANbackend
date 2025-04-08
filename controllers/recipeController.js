const Recipe = require('../models/recipe');

// GET /api/recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/recipes/:id
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/recipes
exports.createRecipe = async (req, res) => {
  try {
    const { name, description, ingredients } = req.body;
    const newRecipe = new Recipe({ name, description, ingredients });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: 'Invalid recipe data' });
  }
};
