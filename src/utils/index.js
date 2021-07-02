import { v4 as uuidv4 } from "uuid";

export const createKey = () => uuidv4();

export const formatDate = (date) => {
  const time = new Date(date);
  let d = time.getDate() > 9 ? time.getDate() : `0${time.getDate()}`;
  let m =
    time.getMonth() + 1 > 9 ? time.getMonth() + 1 : `0${time.getMonth() + 1}`;
  let y = time.getFullYear();
  return `${y}-${m}-${d}`;
};

export const validDaysToDue = (due) =>
  Boolean(due.setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0) >= 0);
