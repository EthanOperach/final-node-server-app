import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByGame = (gameID) =>
    reviewsModel
        .find({ gameID })
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({ author })

export const deleteReview = (rid) =>
    reviewsModel.deleteOne({rid})