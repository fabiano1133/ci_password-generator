export const passwordGenerator = () => {
  const passwordGenerated =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const date = new Date();

  return {
    password: passwordGenerated,
    created_ad: date.toLocaleDateString(),
    statuCode: 201,
  };
};

passwordGenerator();
