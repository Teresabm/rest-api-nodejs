import express from 'express'
import testDbRoute from './routes/testdb.routes.js'
import recipesRoutes from './routes/recipes.routes.js'
const app = express()


app.use(express.json())
/* routes */
app.use(testDbRoute)
app.use('/recetas',recipesRoutes)
export default app