import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID IeW2-GuWddXbROV0GC76LCCKhlg9CN07lNO1cKWRum0",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
