import { Router } from 'express'
import leaderboardController from '../../controllers/leaderboard'

const router = Router()

router.get('/:user/:userId', leaderboardController.getLeaderboardRecordsByUserId)
router.put('/:id', leaderboardController.updateLeaderboardRecord)
router.delete('/:id', leaderboardController.deleteLeaderboardRecord)
router.post('/', leaderboardController.addLeaderboardRecord)
router.get('/:id', leaderboardController.getLeaderboardRecordById)

export default router