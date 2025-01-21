/**
 * user
 */
const userRoute = 'https://jsonplaceholder.typicode.com/users';

const getUsersRequest = async () => {
  let data = null;

  const response = await fetch(userRoute, {
    method: 'GET',
  });

  // Handle response if necessary
  data = await response.json();

  return data;
};

export { getUsersRequest };
