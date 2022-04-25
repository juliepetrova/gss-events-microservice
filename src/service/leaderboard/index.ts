import { PrismaClient, Leaderboard } from '@prisma/client';

const prisma = new PrismaClient();

const deleteLeaderboard = async (id: number) => {
  try {
    const deletedLeaderboardRecord = await prisma.leaderboard.delete({
      where: { id },
    });
    return deletedLeaderboardRecord;
  } catch (error) {
    throw new Error(`Error while trying to delete leaderboard: ${error}`);
  }
};

const updateLeaderboard = async (
  id: number,
  leaderboard: Leaderboard,
) => {
  try {
    const updatedLeaderboardRecord = await prisma.leaderboard.update({
      where: { id },
      data: leaderboard,
    });
    return updatedLeaderboardRecord;
  } catch (error) {
    throw new Error(`Error while trying to update leaderboard: ${error}`);
  }
};

const getLeaderboardById = async (id: number) => {
  try {
    const leaderboardRecord = await prisma.leaderboard.findUnique({
      where: {
        id,
      },
    });
    if (!leaderboardRecord) {
      throw new Error('Could not find event with the specified id');
    }
    return leaderboardRecord;
  } catch (error) {
    throw new Error(`Error while trying to get leaderboard by id: ${error}`);
  }
};

const getLeaderboardsByUserId = async (userId: number) => {
  try {
    const leaderboardRecords = await prisma.leaderboard.findMany({
      where: {
        userId,
      },
    });
    if (!leaderboardRecords) {
      throw new Error('Could not find leaderboards with the scpecifies user id');
    }
    return leaderboardRecords;
  } catch (error) {
    throw new Error(`Error while trying to delete leaderboards by user id: ${error}`);
  }
};

const createLeaderboard = async (leaderboard: Leaderboard) => {
  try {
    const createdLeaderboardRecord = await prisma.leaderboard.create({
      data: leaderboard,
    });
    return createdLeaderboardRecord;
  } catch (error) {
    throw new Error(`Error while trying to create leaderboard: ${error}`);
  }
};

export default {
  createLeaderboard,
  updateLeaderboard,
  deleteLeaderboard,
  getLeaderboardById,
  getLeaderboardsByUserId,
};
