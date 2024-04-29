import instance from "./api_instance"

export const registerdata = async (data)=>{
    console.log("data", data)
    const responce = await instance.post('/user/register', data);
    return responce
    
}
export const loginData = async (data)=>{
    console.log("data", data)
    const responce = await instance.post('/user/login', data);
    return responce


}
export const categoryList = async ()=>{
    const responce = await instance.get('/category/list', );
    return responce


}
export const productList = async ()=>{
    const responce = await instance.get('/product/list', );
    return responce


}
export const userDetail = async ()=>{
    const responce = await instance.get('/user/', );
    return responce.data.data


}
export const productAddData = async (data)=>{
    console.log("productadddata", data)
    const responce = await instance.post('/product/add',data );
    return responce


}
export const brandList = async ()=>{
    // console.log("productadddata", )
    const responce = await instance.get('/brand/list' );
    return responce


}
export const SubCategoryList = async ()=>{
    // console.log("productadddata", )
    const responce = await instance.get('/subCategory/list' );
    return responce.data.data


}
export const prouctDelete = async (data)=>{
    console.log("productadddata", data)
    const response = await instance.delete(`/product/remove`,{ data: data }); 
    return response;


}
export const prouctSearch = async (value)=>{
    // console.log("productadddata", )
    const response = await instance.delete(`/product/list?s=${value}`); 
    return response;


}
