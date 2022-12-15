import * as dao from "./reviews-dao.js"
import {findReviewsByAuthor, findReviewsByGame, deleteReview} from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const findReviewsByGame = async (req, res) => {
        const gameID = req.params.gameID
        const reviews = await dao.findReviewsByGame(gameID)
        res.json(reviews)
    }
    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }
    const deleteReview = async (req, res) => {
        const rid = req.params._id
        const reviews = await dao.deleteReview(rid)
        res.json(reviews)
    }
    app.post('/api/reviews', createReview)
    app.get('/api/games/:gameID/reviews', findReviewsByGame)
    app.get('/api/users/:author/reviews', findReviewsByAuthor)
    app.delete('api/reviews/:rid', deleteReview)
}
export default ReviewsController