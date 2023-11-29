const timeOutForFetch = 5000;

const api = 'https://api.themoviedb.org/3/';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjk4ZTAxNWE4MjMzZTE3YzZhNDRiMWRiZDBjNGYyMyIsInN1YiI6IjY1NjQ1ZTI2OGYyNmJjMDBmZjZmYzc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JU34yjlFkF_BO3YmFostPHvZN8BZ0bd678869QXjbbg';

//FetchGetByToken
export const FetchGetByToken = async (route, signal) => {
  try {
    const response = await fetch(api + route, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      signal: signal,
      timeOut: timeOutForFetch,
    });

    if (response != null) {
      const jsonRes = await response.json(); // Await the JSON parsing
      // console.log('status >>>', jsonRes);
      return jsonRes;
    } else {
      console.log('Error:', response);
      return null;
    }
  } catch (error) {
    console.error('Fetch error:', err[0].TypeError);
    //write model
    return null;
  }
};

// FetchPost With Token
export const fetchPostByToken = async (route, data, signal = null) => {
  let response = null;
  try {
    response = await fetch(api + route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
      signal: signal,
      timeout: timeOutForFetch,
    });
    if (response != null) {
      let json = await response.json();
      return json;
    }
  } catch (e) {
    console.log(e);
  }
  return null;
};
