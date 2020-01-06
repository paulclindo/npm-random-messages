const messages = ["Hola", "Paul", "Diego", "Brayan", "Almendra"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
