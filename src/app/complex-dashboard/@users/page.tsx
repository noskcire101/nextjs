function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Users() {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error(`Error loading users`);
  }

  return <h1>Users</h1>;
}
