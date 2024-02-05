import { sampleSize } from "lodash-es";

export function getRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return sampleSize(characters, length).join("");
}
