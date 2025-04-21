// import { getOEMData } from "@/app/api/api";
import OemCategory from "./page";

export default async  function fetchCat(){
    const response = await fetch("http://localhost:4008/oemdata/");
    const data = await response.json()
    console.log("Fetched OEM Data:", data);
    // const response = await getOEMData();
    // const data = await response.json()

    return (
        <>
         <OemCategory data={data}/>
        </>
    )
}