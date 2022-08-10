let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
  baseURL =
    "https://backend.htmlfoods.org/" || "https://htmlfood.herokuapp.com";
} else {
  baseURL = "https://htmlfood.herokuapp.com";
}

export default function ({ $axios }, inject) {
  const axios = $axios.create({
    baseURL: baseURL
  });
  inject("axios", axios);
}
