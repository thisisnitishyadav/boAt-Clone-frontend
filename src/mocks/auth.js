import axios from "axios";


class AuthApi{
    async signup(data){
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/auth/login`, data);
            
            if (res) {
                alert('yes');
                return res;
            } else {
                alert('no');
                return false;
            }
        } catch (error) {
            alert(error);
        }
    }


    async login(data){
        try {
             const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/auth/login`, data);
            if(res){
                alert('y');
                return res
            }else{
                alert('n1');
                return false
            }
        } catch (error) {
          alert(error);
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