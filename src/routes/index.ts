import { Router } from 'express'
import leaderboard from './leaderboard'
import events from './events'

const router = Router()

router.use('/leaderboard', leaderboard)
router.use('/events', events)

export default router