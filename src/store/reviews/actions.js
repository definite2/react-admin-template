import { reviewsSlice, callTypes } from "./slice";
import { mockGetReviewsService } from "../../services/reviewsApi";
export const reviewsActions = reviewsSlice.actions;

export const mockgetReviews = (queryParams) => (dispatch) => {
  dispatch(reviewsActions.startCall({ callType: callTypes.list }));
  return mockGetReviewsService({queryParams})
    .then((response) => {
      // const {data,totalPages}=response
      dispatch(reviewsActions.reviewsFetched(response));
      dispatch()
    })
    .catch((error) => {
      error.clientMessage = "Can't get reviews from server";
      dispatch(reviewsActions.catchError({ error, callType: callTypes.list }));
    });
};
