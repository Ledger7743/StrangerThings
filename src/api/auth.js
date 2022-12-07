const cohort = "2211-FTB-WEB-FT";

//registering a user to our API
//sends response and shows a token in an object
// this is from POST wrong wrong
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    //object with data that contains a token which is needed to make other request to the API
    //deconstruction of the object data same as token = response.data.token
    //token used as a key to access other things in the API (bc we must be a register user to utilize the API)
    // this is saying const token = response.data.token
    const {
      data: { token },
    } = await response.json();
    return token;
  } catch (error) {
    console.error(error);
    console.log("myresponse data", token);
  }
};

//another API request that is going to take in a token
//takes the token in and returns data
export const fetchMe = async (token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/me/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
