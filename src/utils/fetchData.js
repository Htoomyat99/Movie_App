import Config from 'react-native-config';

const api = Config.API_URL;

const timeOutForFetch = 5000;

//FetchPost
export const FetchPost = async (route, data, signal = null) => {
  let response = null;
  try {
    response = await fetch(api + route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: signal,
      timeOut: timeOutForFetch,
    });

    if (response != null) {
      const jsonRes = response.json();
      return jsonRes;
    }
  } catch (e) {
    console.log(e);
  }
};
