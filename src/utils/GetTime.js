export const GetTime = (timeStamp) => {
  const hour = new Date(timeStamp).getHours();
  const minute = new Date(timeStamp).getMinutes();

  return `${hour}:${minute}`;
};
