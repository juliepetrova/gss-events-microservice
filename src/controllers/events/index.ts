import { Event } from '@prisma/client';
import { EventService } from '../../service/events/index';

const getUpcommingEvents = async (req: any, res: any) => {
  const events: Event[] | undefined = await EventService.getAllEvents();

  return events !== undefined
    ? res.json({
      success: true,
      method: 'Get all events',
      payload: events,
    })
    : res.sendStatus(404);
};

const getEventById = async (req: any, res: any) => {
  const event: Event | undefined = await EventService.getEventById(
    parseInt(req.params.id, 10),
  );

  return event !== undefined
    ? res.json({
      success: true,
      payload: event,
    })
    : res.sendStatus(404);
};

const addEvent = async (req: any, res: any) => {
  const event = req.body;

  const createdEvent: Event | undefined = await EventService.createEvent(event);

  return createdEvent !== undefined
    ? res.json({
      success: true,
      payload: createdEvent,
    })
    : res.sendStatus(404);
};

const deleteEvent = async (req: any, res: any) => {
  const event: Event | undefined = await EventService.deleteEvent(
    parseInt(req.params.id, 10),
  );

  return event !== undefined
    ? res.json({
      success: true,
      payload: event,
    })
    : res.sendStatus(404);
};

const updateEvent = async (req: any, res: any) => {
  const eventId = req.params.id;
  const event: Event = req.body;

  const updatedEvent: Event | undefined = await
  EventService.updateEvent(parseInt(eventId, 10), event);

  return updatedEvent !== undefined
    ? res.json({
      success: true,
      payload: updatedEvent,
    })
    : res.sendStatus(404);
};

export default {
  getUpcommingEvents, getEventById, updateEvent, deleteEvent, addEvent,
};
