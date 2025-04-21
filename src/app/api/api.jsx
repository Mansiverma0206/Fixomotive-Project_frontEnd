const BASE_URL = "http://localhost:4008";

export async function getOEMData(){
    try{
       const res = await fetch(`${BASE_URL}/oemdata/`,{
        method :"GET",
        headers:{
            "Content-Type" : "application/json",
        },
        cache:"no-store",
       });
       if(!res.ok){
        throw new Error(`Faild to fetch OEM data : ${res.statusText}`);
       }
       const data = await res.json();
       return data;
    }catch(error){
       console.error("API error : ",error)
       throw error;
    }
}