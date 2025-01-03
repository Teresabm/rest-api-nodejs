import express from 'express'
import testDbRoute from './routes/testdb.routes.js'
import recipesRoutes from './routes/recipes.routes.js'
const app = express()


/* CORS */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json())
/* routes */
app.use(testDbRoute)
app.use('/recetas',recipesRoutes)


export default app