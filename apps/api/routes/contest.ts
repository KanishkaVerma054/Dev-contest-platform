import { Router } from "express";

const router = Router();

router.get("/active", (req, res) => {
    // adding pagination to show limited contest in on page
    // e.g. `https://dev-contest.com/contest/active?offset-10&page=20` 
    const {offset, page} = req.query;
})

router.get("/finished", (req, res) => {
    // adding pagination to show limited contest in on page
    // e.g. `https://dev-contest.com/contest/active?offset-10&page=20` 
    const {offset, page} = req.query;
})

router.get("/:contestId", (req, res) => {
    const contestId = req.params.contestId
})

router.get("/:contestId/:challengeId", (req, res) => {
    const contestId = req.params.contestId
})

router.get("/leaderboard/:contestId", (req, res) => {

})

router.post("/submit/:challengeId", (req, res) => {
    // have rate limiting
    // max 20 submissions per problem
    // forward the request to GPT
    // store the response in the sorted set and the DB
})

export default router;