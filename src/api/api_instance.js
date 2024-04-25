import axios from "axios";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";


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


  const tokenData = Cookies.get("logindata");
  console.log(tokenData);
   if(tokenData){
    const bytes = CryptoJS.AES.decrypt(tokenData, 'secret_key');
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    const data = JSON.parse(decryptedToken);
    // console.log("token data: " + decryptedToken);
  // console.log(authToken,'authTokenauthTokenauthTokenauthTokenauthToken');
    config.headers["authtoken"] = data?.authToken ?? "";
  }
  return config;
  
});

export default instance;
