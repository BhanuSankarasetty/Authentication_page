import express from "express";
import { connectToDatabase } from "../lib/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyToken } from "./auth.js"
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM users WHERE LOWER(email) = LOWER(?)', [email]);

        if (rows.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.query(
            "INSERT INTO users (name,email,password) VALUES (?,?,?)",
            [username, email, hashedPassword]
        );

        res.status(201).json({
            message: "User created successfully",
            user: { id: result.insertId, username, email }
        });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM users WHERE LOWER(email) = LOWER(?)', [email]);

        if (rows.length === 0) return res.status(404).json({ message: "User not found" });

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token, user: { id: user.id, email: user.email } });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

// Protected /home route
router.get('/home', verifyToken, async (req, res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT id, name, email FROM users WHERE id = ?', [req.user.id]);

        if (rows.length === 0) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User fetched successfully", user: rows[0] });
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

export default router;
