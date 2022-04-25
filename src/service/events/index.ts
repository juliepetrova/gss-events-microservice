import { PrismaClient, Event } from '@prisma/client';

const prisma = new PrismaClient();

const deleteEvent = async (id: number) => {
  try {
    const deletedEvent = await prisma.event.delete({
      where: { id },
    });
    return deletedEvent;
  } catch (error) {
    throw new Error(`Error while trying to delete event: ${error}`);
  }
};

const updateEvent = async (
  id: number,
  event: Event,
) => {
  try {
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: event,
    });
    return updatedEvent;
  } catch (error) {
    throw new Error(`Error while trying to update event: ${error}`);
  }
};

const getEventById = async (id: number) => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id,
      },
    });
    if (!event) {
      throw new Error('Could not find event with the specified id');
    }
    return event;
  } catch (error) {
    throw new Error(`Error while trying to get event by id: ${error}`);
  }
};

const getAllEvents = async () => {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    throw new Error(`Error while trying to get events: ${error}`);
  }
};

const createEvent = async (event: Event) => {
  try {
    console.log(`Service ${event.description}`);

    const createdEvent = await prisma.event.create({
      data: event,
    });
    return createdEvent;
  } catch (error) {
    throw new Error(`Error while trying to create event by id: ${error}`);
  }
};

export default {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
