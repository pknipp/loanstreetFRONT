import { DealType } from "../types";

export const CREATE_DEAL = "CREATE_DEAL";

export const createDeal = (deal: DealType) => {
  return {
    type: CREATE_DEAL,
    payload: {
      deal,
    },
  };
};
