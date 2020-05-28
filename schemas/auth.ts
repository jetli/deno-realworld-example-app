import { DATA_TYPES, Model } from "../deps.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: {
      type: DATA_TYPES.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DATA_TYPES.STRING,
      length: 255,
    },
    email: {
      type: DATA_TYPES.STRING,
      length: 255,
    },
    password: {
      type: DATA_TYPES.STRING,
      length: 255,
    },
    bio: {
      type: DATA_TYPES.STRING,
      length: 2048,
      allowNull: true,
    },
    image: {
      type: DATA_TYPES.STRING,
      length: 2048,
      allowNull: true,
    },
  };
}
