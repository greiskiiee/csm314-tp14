import bcrypt from "bcrypt";
import { UserModel } from "../model/user.js";

export const createUser = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  console.log(password, hashedPass);

  try {
    const oldUser = await UserModel.find({ email: email });
    if (oldUser.length > 0) {
      return res
        .status(400)
        .send({ success: false, messsage: "email already taken" })
        .end();
    }

    const user = await UserModel.create({
      username: username,
      email: email,
      password: hashedPass,
      phoneNumber: phoneNumber,
    });

    return res.status(200).send({ success: true, user: user }).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error }).end();
  }
};
