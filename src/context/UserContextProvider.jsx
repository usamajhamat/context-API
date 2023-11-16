import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const names = "USAMA, Ali"
    return(
        <UserContext.Provider value={{user,setUser,names}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider