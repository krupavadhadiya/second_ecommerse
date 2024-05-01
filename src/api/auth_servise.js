import instance from "./api_instance";

export const registerdata = async (data) => {
  console.log("data", data);
  const responce = await instance.post("/user/register", data);
  return responce;
};
export const loginData = async (data) => {
  console.log("data", data);
  const responce = await instance.post("/user/login", data);
  return responce;
};
export const categoryList = async () => {
  const responce = await instance.get("/category/list");
  return responce;
};
export const productList = async (data) => {
  const responce = await instance.get(`/product/list?s=${data}`);
  return responce;
};
// export const productListSearch = async (data)=>{
//     console.log(data,"datasearch")
//     const responce = await instance.get(`/product/list?s=${data}` );
//     return responce

// }
export const userDetail = async () => {
  const responce = await instance.get("/user/");
  return responce.data.data;
};
export const productAddData = async (data) => {
//   console.log("productadddata", data);
  const responce = await instance.post("/product/add", data);
  return responce;
};
export const categoryAddData = async (data) => {
  console.log("categoryadddata", data);
  const responce = await instance.post("/category/add", data);
  return responce;
};
export const brandList = async () => {
  // console.log("productadddata", )
  const responce = await instance.get("/brand/list");
  return responce;
};
export const SubCategoryList = async () => {
  // console.log("productadddata", )
  const responce = await instance.get("/subCategory/list");
  return responce.data.data;
};
export const prouctDelete = async (data) => {
  console.log("productadddata", data);
  const response = await instance.delete(`/product/remove`, { data: data });
  return response;
};
export const prouctAddToCart = async (data) => {
  console.log("prouctAddToCart12", data);
  const response = await instance.post("/cart/add", data);
  return response;
};

export const categoryDelete = async (data) => {
  console.log("prouctAddToCart", data);
  const response = await instance.delete("/category/remove", { data: data });
  return response;
};
export const cartDetail = async () => {
  const response = await instance.get("/cart/");
  return response;
};
