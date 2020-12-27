import React, {useState} from "react";
import axios from "axios";

export const AuthContext = React.createContext({
    auth: null,
    fetchUser: ()=>{}
});

export default props => {
    const [auth, setAuth] = useState( null);

    const fetchUser = async () => {
        const res = await axios.get('/api/current_user');
        setAuth(res.data || false);
    };

    return <AuthContext.Provider value={{auth: auth, fetchUser: fetchUser}}>
        {props.children}
    </AuthContext.Provider>
}
