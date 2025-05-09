import { useEffect } from "react"
import { manageLocalStorage } from "./common/utils"
import { KEY_ACCESS_TOKEN } from "./common/constants"
import { getProfileAPI } from "./service/user.service";
import  {useDispatch} from "react-redux"
import { setUser } from "./store/user.slice";
export default function App({children}){
  const dispatch = useDispatch();

  
  useEffect(()=>{
    const token= manageLocalStorage.get(KEY_ACCESS_TOKEN);
 
    if(token){
          console.log("token ",token);
          getProfileAPI().then((res)=>{

            console.log("res ",res);

            dispatch(setUser(res.data.content));
          })
    }
  },[])
  return <>
      {children}
  </>
}