import User, { Address ,MobileNo  } from "./myprofile/user";
import FullName, {Address as Home} from "./myprofile/profile";
import BioData from "./myprofile/bioData";
export default function Start (){

const bioData = {
    name : "sushil lo1c ",
    mobileNo : 1234567890,
    address : "indore mp indis"
}

    return(
        <>
        <User />
        <Address />
        <MobileNo />
        <FullName />
        <Home />
        <br></br>
        <BioData  data={bioData} />

        </>
    )
}