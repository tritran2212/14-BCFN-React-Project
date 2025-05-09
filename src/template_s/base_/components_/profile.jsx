import { useSelector } from "react-redux";

import { Avatar } from "../../../components/avatar/avatar";

export function Profile() {
    const user = useSelector((store) => {
        return store.userReducer.user;
    });

    return (

        <>
            <div className="flex gap-2 items-center">

                <p>{user.name}</p>

                <Avatar >{user.name.slice(0,1)}</Avatar>
            </div>
        </>
    )
}
