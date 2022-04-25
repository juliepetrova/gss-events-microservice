export const getSuccessResponse = (res: any, body: any) => res.json({
  success: true,
  payload: body,
});

export const getErrorResponse = (res: any, error: any) => res.status(400).json({ error });
