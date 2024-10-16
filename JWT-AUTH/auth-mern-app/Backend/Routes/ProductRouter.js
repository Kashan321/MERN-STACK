import express from "express"
import ensureAuthenticated from "../Middlewares/Auth.js";

const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Sample Product 1",
            price: 10000
        },
        {
            name: "Sample Product 2",
            price: 20000
        }
    ])
});

export default router;