import { PrismaClient, Event } from '@prisma/client';

const prisma = new PrismaClient();

export class EventService {
  public static async deleteEvent(
    id: number,
  ): Promise<Event | undefined> {
    try {
      const deletedEvent = await prisma.event.delete({
        where: { id },
      });
      return deletedEvent;
    } catch (err) {
      return undefined;
    }
  }

  public static async updateEvent(
    id: number,
    event: Event,
  ): Promise<Event | undefined> {
    try {
      const updatedEvent = await prisma.event.update({
        where: { id },
        data: event,
      });
      return updatedEvent;
    } catch (err) {
      return undefined;
    }
  }

  public static async getEventById(
    id: number,
  ): Promise<Event | undefined> {
    try {
      const event = await prisma.event.findUnique({
        where: {
          id,
        },
      });
      return event || undefined;
    } catch (err) {
      return undefined;
    }
  }

  public static async getAllEvents(): Promise<Event[] | undefined> {
    try {
      const events = await prisma.event.findMany();
      return events;
    } catch (err) {
      return undefined;
    }
  }

  public static async createEvent(
    event: Event,
  ): Promise<Event | undefined> {
    try {
      console.log(`Service ${event.description}`);

      const createdEvent = await prisma.event.create({
        data: event,
      });
      return createdEvent;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
}
