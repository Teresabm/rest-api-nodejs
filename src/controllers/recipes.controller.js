import {pool} from '../db.js'

export const getRecentlyRecipes = async (req,res) => {
    try{
      const [rows] = await pool.query('SELECT details_receta_id, details_receta_nombre FROM details_recetas ORDER BY fecha_registro ASC LIMIT 5')
        res.json(rows)  
    }catch(error){
        return res.status(500).json({
            message : 'Something woes grong'
        })
    }
    
}

export const getByCategory = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT details_receta_id , details_receta_nombre FROM details_recetas JOIN categorias ON details_recetas.categoria_id = categorias.categoria_id WHERE categorias.categoria_id = ?',[req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message : 'Category not found'
        })
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message : 'Something woes grong'
        })
    }
}

export const getRecipeIngredients = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT receta_ingrediente_id, cantidad, gramaje_nombre, ingrediente_nombre FROM details_recetas JOIN receta_ingredientes ON details_recetas.details_receta_id = receta_ingredientes.details_receta_id JOIN gramajes ON gramajes.gramaje_id =  receta_ingredientes.gramaje_id JOIN ingredientes ON ingredientes.ingrediente_id = receta_ingredientes.ingrediente_id WHERE details_recetas.details_receta_id = ?',[req.params.id])
         if(rows.length <= 0) return res.status(404).json({
            message : 'Recipe not found'
        })
         res.json(rows)
    }catch{
        return res.status(500).json({
            message : 'Something woes grong'
        })
    }
   
}