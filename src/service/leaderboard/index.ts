import { PrismaClient, Leaderboard } from '@prisma/client';

const prisma = new PrismaClient();

export class LeaderboardService {
  public static async deleteLeaderboard(
    id: number,
  ): Promise<Leaderboard | undefined> {
    try {
      const deletedLeaderboardRecord = await prisma.leaderboard.delete({
        where: { id },
      });
      return deletedLeaderboardRecord;
    } catch (err) {
      return undefined;
    }
  }

  public static async updateLeaderboard(
    id: number,
    leaderboard: Leaderboard,
  ): Promise<Leaderboard | undefined> {
    try {
      const updatedLeaderboardRecord = await prisma.leaderboard.update({
        where: { id },
        data: leaderboard,
      });
      return updatedLeaderboardRecord;
    } catch (err) {
      return undefined;
    }
  }

  public static async getLeaderboardById(
    id: number,
  ): Promise<Leaderboard | undefined> {
    try {
      const leaderboardRecord = await prisma.leaderboard.findUnique({
        where: {
          id,
        },
      });
      return leaderboardRecord || undefined;
    } catch (err) {
      return undefined;
    }
  }

  public static async getLeaderboardsByUserId(
    userId: number,
  ): Promise<Leaderboard[] | undefined> {
    try {
      const leaderboardRecords = await prisma.leaderboard.findMany({
        where: {
          userId,
        },
      });
      return leaderboardRecords || undefined;
    } catch (err) {
      return undefined;
    }
  }

  public static async createLeaderboard(
    leaderboard: Leaderboard,
  ): Promise<Leaderboard | undefined> {
    try {
      const createdLeaderboardRecord = await prisma.leaderboard.create({
        data: leaderboard,
      });
      return createdLeaderboardRecord;
    } catch (err) {
      return undefined;
    }
  }
}
