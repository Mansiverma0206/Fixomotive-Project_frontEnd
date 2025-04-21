import { Box } from "@mui/material"

const { default: EcoPage } = require("@/Component/car/EcoPage")
const { default: ManulPage } = require("@/Component/car/ManulPage")
const { default: ModulePage } = require("@/Component/car/ModulePage")
const { default: OemSelect } = require("@/Component/car/OemSelect")

const UserPage = () =>{
    return(
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', mt: 2 }}>
          <OemSelect/>
          <ModulePage/>
          <EcoPage/>
          <ManulPage/>
        </Box>
    )
}

export default UserPage;