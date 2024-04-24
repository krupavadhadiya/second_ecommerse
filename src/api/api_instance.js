import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.22.11.131:4000",
});

instance.defaults.headers.common = { "Access-Control-Allow-Origin": "*" };

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (
      res.status === 401 ||
      error.response?.data?.message === "Token Expired"
    ) {
      localStorage.remove("loginfile", { path: "/" });
      window.location.reload();
    }
    console.error("Looks like there was a problem. Status Code:" + res.status);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(function (config) {
  const tokenData = JSON.parse(localStorage.getItem("loginfile")) || [];
  console.log("token data: " + tokenData);
  config.headers["authtoken"] = tokenData || "";
  return config;
});

export default instance;
