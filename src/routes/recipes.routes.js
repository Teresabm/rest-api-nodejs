import {Router} from 'express'
import { getCategoryById, getRecentlyRecipes, getRecipeIngredients, getCategories, getRecipeById } from '../controllers/recipes.controller.js'
const router = Router()

router.get('/recientes',getRecentlyRecipes)
router.get('/categorias',getCategories)
router.get('/categoria/:id',getCategoryById)
router.get('/detalles/:id',getRecipeById)
router.get('/receta/:id',getRecipeIngredients)

export default router