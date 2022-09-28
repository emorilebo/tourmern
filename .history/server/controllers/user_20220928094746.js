import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

const secret = "test";

export const signup