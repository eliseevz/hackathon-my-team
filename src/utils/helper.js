export const getDelay = () => {
  const randomDelay = Math.random() * (1 - 0.2 + 1) + 0.2;
  return randomDelay;
};

export const RandColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
