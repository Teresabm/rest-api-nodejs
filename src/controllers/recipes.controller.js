import {pool} from '../db.js'

export const getRecentlyRecipes = async (req,res) => {
    try{
      const [rows] = await pool.query('SELECT receta_id, receta_nombre, imagen FROM recetas ORDER BY fecha DESC LIMIT 6')
        res.json(rows)  
    }catch(error){
        return res.status(500).json({
            message : 'Something goes grong'
        })
    }
    
}

export const getCategories = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM categorias')
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
}

export const getCategoryById = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT receta_id, receta_nombre, imagen FROM recetas INNER JOIN categorias ON recetas.categoria_id = categorias.categoria_id WHERE categorias.categoria_id=?',[req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message : 'Category not found'
        })
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message : 'Something goes grong'
        })
    }
}

export const getRecipeById = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT receta_id, receta_nombre, procedimiento, porciones, imagen FROM recetas WHERE receta_id= ?',[req.params.id])
        res.json(rows)
    }catch(error){
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}

export const getRecipeIngredients = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT recetas.receta_id, receta_nombre, cantidad, gramaje_nombre, ingrediente_nombre FROM recetas JOIN descripciones ON recetas.receta_id = descripciones.receta_id JOIN gramajes ON gramajes.gramaje_id = descripciones.gramaje_id JOIN ingredientes ON ingredientes.ingrediente_id = descripciones.ingrediente_id WHERE recetas.receta_id = ?',[req.params.id])
         if(rows.length <= 0) return res.status(404).json({
            message : 'Recipe not found'
        })
         res.json(rows)
    }catch{
        return res.status(500).json({
            message : 'Something goes grong'
        })
    }
}