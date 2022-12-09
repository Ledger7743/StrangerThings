import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT";

export async function getAllPosts() {
  //object pulling an object pulling an object from API to get to posts
  try {
    const {
      data: {
        data: { posts },
      },
    } = await axios.get(`${BASE}/posts`);
    //console.log(posts);
    return posts;
  } catch (error) {
    throw error;
  }
}

export const createNewPost = async ({ post, token }) => {
  try {
    const response = await fetch(`${BASE}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal",
          description:
            "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
          price: "$480.00",
          willDeliver: true,
        },
      }),
    });
  } catch (error) {
    throw error;
  }
};

// export const updatePartialPost = async (postId, post) => {
//   try {
//     const response = await fetch(`${BASE}/posts/${postId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         post: {
//           title: "My favorite stuffed animal",
//           description:
//             "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
//           price: "$480.00",
//           location: "New York, NY",
//           willDeliver: true,
//         },
//       }),
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteEntirePost = async (postId) => {
//   try {
//     const response = await fetch(`${BASE}/posts/5e8d1bd48829fb0017d2233b`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     throw error;
//   }
// };
