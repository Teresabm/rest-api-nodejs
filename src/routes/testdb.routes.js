import {Router} from 'express'
import { getTestDb } from '../controllers/testdb.controller.js'
const router = Router()

router.get('/ping',getTestDb)

export default router