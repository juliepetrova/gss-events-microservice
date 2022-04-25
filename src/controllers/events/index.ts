import { Event } from '@prisma/client';
import { getSuccessResponse, getErrorResponse } from '../../utils/index';
import EventService from '../../service/events/index';

const getUpcommingEvents = async (req: any, res: any) => {
  try {
    const events: Event[] = await EventService.getAllEvents();
    return getSuccessResponse(res, events);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const getEventById = async (req: any, res: any) => {
  try {
    const eventId = parseInt(req.params.id, 10);
    const event: Event = await EventService.getEventById(
      eventId,
    );
    return getSuccessResponse(res, event);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const addEvent = async (req: any, res: any) => {
  try {
    const event: Event = req.body;
    const createdEvent: Event = await EventService.createEvent(event);
    return getSuccessResponse(res, createdEvent);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const deleteEvent = async (req: any, res: any) => {
  try {
    const eventId = parseInt(req.params.id, 10);
    const event: Event = await EventService.deleteEvent(
      eventId,
    );
    return getSuccessResponse(res, event);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const updateEvent = async (req: any, res: any) => {
  try {
    const eventId = parseInt(req.params.id, 10);
    const event: Event = req.body;

    const updatedEvent: Event = await
    EventService.updateEvent(eventId, event);

    return getSuccessResponse(res, updatedEvent);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

export default {
  getUpcommingEvents, getEventById, updateEvent, deleteEvent, addEvent,
};
