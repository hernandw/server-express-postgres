import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/users", (req, res) => {
    pool.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result.rows);
    });
})

export default router;
