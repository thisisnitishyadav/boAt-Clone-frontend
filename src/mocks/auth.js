import axios from "axios";


class AuthApi{
    async signup(data){
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/auth/register`,data,{
method:"post"
            })

            if(res){
                return res
            }else{
                return false
            }
        } catch (error) {
          console.log(error);  
        }
    }


    async login(data){
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/auth/login`,data,{ 
                method:"post"
            })

            if(res){
                return res
            }else{
                return false
            }
        } catch (error) {
          console.log(error);  
        }
    }

    
    async getUser(){

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/userapp/user/me`,{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
            
        })

        if(res?.data?.status === "SUCCESS"){
            return res
        }else{
            return false
        }
    } catch (error) {
      console.log(error);  
    }
}
}


export const authApi = new AuthApi();