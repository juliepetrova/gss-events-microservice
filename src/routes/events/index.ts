import { Router } from 'express'
import eventsController from '../../controllers/events'

const router = Router()

router.get('/', eventsController.getUpcommingEvents)
router.put('/:id', eventsController.updateEvent)
router.delete('/:id', eventsController.deleteEvent)
router.post('/', eventsController.addEvent)
router.get('/:id', eventsController.getEventById)

export default router