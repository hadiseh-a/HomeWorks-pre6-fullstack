import Task from "../models/task.model.js";
import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { password, ...restOfData } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      password: hashedPassword,
      ...restOfData,
    });

    const newVerifyEmail = await VerifyEmail.create({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    const message = `${process.env.BASE_URL}/user/verify/${newUser._id}/${newVerifyEmail.token}`;

    await sendEmail(newUser.email, "verify email", message);

    res.status(201).json({
      message: "User registered successfully. Please Verify Email",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

export const readUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { ...newUserData, _id },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const deletedUser = await User.findOneAndDelete({ _id });
    res.status(202).json(deletedUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getTasksOfUser = async (req, res) => {
  try {
    const {
      params: { userId },
    } = req;
    const tasksOfUser = await Task.find({ userId: userId });
    res.status(200).json(tasksOfUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
