import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import VerifyEmail from "../models/verifyEmail.model.js";
import crypto from "crypto";
import senderEmail from "../utils/senderEmail.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const {
      body: { password, ...resOfData },
    } = req;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      password: hashedPassword,
      ...resOfData,
    });

    const newVerifyEmail = await VerifyEmail.create({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    const message = `${process.env.BASE_URL}/user/verify/${newUser._id}/${newVerifyEmail.token}`;

    await senderEmail(newUser.email, "verify email for to do app", message);

    res.status(201).json({
      message: "User registered successfully. Please Verify Email",
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const verifyUserEmail = async (req, res) => {
  try {
    const {
      params: { id: userId, token },
    } = req;

    const user = User.findById(userId);
    const verifyToken = VerifyEmail.findOne({ userId: userId });

    if (!user || !verifyToken) {
      return res.status(400).json({ error: "invalid link" });
    }
    if (token !== verifyToken.token) {
      return res.status(400).json({ error: "invalid link" });
    }

    user.verified = true;
    await user.save();
    verifyToken.deleteOne();

    res
      .status(200)
      .send(
        "<h1 style='text-align: center;color: rgb(4, 202, 53);'>Email verified successfully</h1>"
      );
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(404).json({
        error: "Authentication failed. email or password incorrect",
      });
    if (!user.verified)
      return res.status(401).json({
        error: "Authentication failed. This email has not been verified",
      });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.status(404).json({
        error: "Authentication failed. email or password incorrect",
      });

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30m",
    });
    res.cookie("token", token, { httpOnly: true, secure: true });

    res.status(200).json({ msg: "logged in success fully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const readUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...body, _id: id },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(202).json(deletedUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTasksOfUser = async (req, res) => {
  try {
    const { userId } = req;

    const tasksOfUser = await Task.find({ userId: userId });
    res.status(200).json(tasksOfUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
