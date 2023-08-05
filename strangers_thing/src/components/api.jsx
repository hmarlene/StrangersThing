const cohortName = "2302-acc-pt-web-pt-b";
const urlBase = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export default function api() {

}

async function getPosts() {
    try {
      const response = await fetch(
        `${urlBase}/posts`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
    //   setSuccessMessage(result.message);
    } catch (error) {
    //   setError(error.message);
    }
  }

/**
 * users:
 * post-register
 * post-login
 * get-users/me
 * 
 * posts:
 * get posts
 * post posts
 * patch (update?) posts
 * delete posts
 * 
 * messages:
 * post messages
 * get messages?
 */