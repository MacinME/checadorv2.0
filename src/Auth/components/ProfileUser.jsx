import { PersonalInformation } from "./PersonalInformation";
import { UserBackground } from "./UserBackground";

export const ProfileUser = ({ userInfo }) => {
  return (
    <div className="">
        <UserBackground userInfo={ userInfo }/>

        {/* Personal Information */}
        <PersonalInformation userInfo={ userInfo }/>
    </div>
  )
}
