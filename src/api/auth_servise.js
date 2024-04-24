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
