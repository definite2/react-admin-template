import axios from "axios";
import { REVIEWS_SERVER_URL } from "../constants";
import { userTableData } from "../mock/reviewsTableData";
//this is real api of your
export const reviewsApi = {
  getReviews: (params) => axios.get(`${REVIEWS_SERVER_URL}`, { params }), //params for filtering
};
//this is mock service for demo purposes:
export const mockGetReviewsService = (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(userTableData);
    }, 500);
  });
};
