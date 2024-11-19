import {Router} from 'express'
import { getByCategory, getRecentlyRecipes, getRecipeIngredients } from '../controllers/recipes.controller.js'
const router = Router()

router.get('/recently',getRecentlyRecipes)
router.get('/category/:id',getByCategory)
router.get('/detalles/:id',getRecipeIngredients)

export default router