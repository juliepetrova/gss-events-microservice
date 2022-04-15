import { Leaderboard } from '@prisma/client';
import { LeaderboardService } from '../../service/leaderboard/index';

const getLeaderboardRecordsByUserId = async (req: any, res: any) => {
  const leaderboards: Leaderboard[] | undefined = await LeaderboardService.getLeaderboardsByUserId(
    parseInt(req.params.userId, 10),
  );

  return leaderboards !== undefined
    ? res.json({
      success: true,
      payload: leaderboards,
    })
    : res.sendStatus(404);
};

const getLeaderboardRecordById = async (req: any, res: any) => {
  const leaderboard: Leaderboard | undefined = await LeaderboardService.getLeaderboardById(
    parseInt(req.params.id, 10),
  );

  return leaderboard !== undefined
    ? res.json({
      success: true,
      payload: leaderboard,
    })
    : res.sendStatus(404);
};

const addLeaderboardRecord = async (req: any, res: any) => {
  const leaderboard = req.body;

  const createdLeaderboardRecord: Leaderboard | undefined = await
  LeaderboardService.createLeaderboard(leaderboard);

  return createdLeaderboardRecord !== undefined
    ? res.json({
      success: true,
      payload: createdLeaderboardRecord,
    })
    : res.sendStatus(404);
};

const deleteLeaderboardRecord = async (req: any, res: any) => {
  const leaderboard: Leaderboard | undefined = await LeaderboardService.deleteLeaderboard(
    parseInt(req.params.id, 10),
  );

  return leaderboard !== undefined
    ? res.json({
      success: true,
      payload: leaderboard,
    })
    : res.sendStatus(404);
};

const updateLeaderboardRecord = async (req: any, res: any) => {
  const leaderboardId = req.params.id;
  const leaderboard: Leaderboard = req.body;

  const updatedLeaderboardRecord: Leaderboard | undefined = await
  LeaderboardService.updateLeaderboard(parseInt(leaderboardId, 10), leaderboard);

  return updatedLeaderboardRecord !== undefined
    ? res.json({
      success: true,
      payload: updatedLeaderboardRecord,
    })
    : res.sendStatus(404);
};

export default {
  getLeaderboardRecordsByUserId,
  getLeaderboardRecordById,
  updateLeaderboardRecord,
  deleteLeaderboardRecord,
  addLeaderboardRecord,
};
