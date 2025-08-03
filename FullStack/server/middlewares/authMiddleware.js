import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies["token"];

    if (!token) return res.status(401).json({ error: "Access Denied" });

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    req.userId = decode.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "invalid token" });
  }
};

export default verifyToken;
