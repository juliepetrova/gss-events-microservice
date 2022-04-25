import { Leaderboard } from '@prisma/client';
import LeaderboardService from '../../service/leaderboard/index';
import { getSuccessResponse, getErrorResponse } from '../../utils/index';

const getLeaderboardRecordsByUserId = async (req: any, res: any) => {
  try {
    const leaderboardId = parseInt(req.params.id, 10);

    const leaderboards: Leaderboard[] = await LeaderboardService.getLeaderboardsByUserId(
      leaderboardId,
    );
    return getSuccessResponse(res, leaderboards);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const getLeaderboardRecordById = async (req: any, res: any) => {
  try {
    const leaderboardId = parseInt(req.params.id, 10);
    const leaderboard: Leaderboard | undefined = await LeaderboardService.getLeaderboardById(
      leaderboardId,
    );

    return getSuccessResponse(res, leaderboard);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const addLeaderboardRecord = async (req: any, res: any) => {
  try {
    const leaderboard = req.body;
    const createdLeaderboardRecord: Leaderboard | undefined = await
    LeaderboardService.createLeaderboard(leaderboard);
    return getSuccessResponse(res, createdLeaderboardRecord);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const deleteLeaderboardRecord = async (req: any, res: any) => {
  try {
    const leaderboardId = parseInt(req.params.id, 10);
    const leaderboard: Leaderboard | undefined = await LeaderboardService.deleteLeaderboard(
      leaderboardId,
    );

    return getSuccessResponse(res, leaderboard);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

const updateLeaderboardRecord = async (req: any, res: any) => {
  try {
    const leaderboardId = parseInt(req.params.id, 10);
    const leaderboard: Leaderboard = req.body;
    const updatedLeaderboardRecord: Leaderboard | undefined = await
    LeaderboardService.updateLeaderboard(leaderboardId, leaderboard);

    return getSuccessResponse(res, updatedLeaderboardRecord);
  } catch (error) {
    return getErrorResponse(res, error);
  }
};

export default {
  getLeaderboardRecordsByUserId,
  getLeaderboardRecordById,
  updateLeaderboardRecord,
  deleteLeaderboardRecord,
  addLeaderboardRecord,
};
