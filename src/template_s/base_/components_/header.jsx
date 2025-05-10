import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { Avatar } from "../../../components/avatar/avatar";
import { useSelector } from "react-redux";
// import { ProfileSkeleton } from "./profile.skeleton";
import { productReducer } from "../../../store/product.slice";
import { manageLocalStorage } from "../../../common/utils";
import { KEY_ACCESS_TOKEN } from "../../../common/constants";
import {Menu} from "../components_/menu";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/user.slice";
function LogoIcon() {



   

    return (
        <>
            <img src="/logo.png" className="w-[116px] h-[40px] "></img>

        </>
    )
}



export function Header() {

    const  dispath = useDispatch();


        const  user = useSelector(
            (store)=>{
                return store.userReducer.user;
            }
        )
        console.log("user",user);

        const numberOfCarts = useSelector((store)=>{
            return store.productReducer.carts.length;
        
        })
        console.log(numberOfCarts)
        
        const  TOKEN = manageLocalStorage.get(KEY_ACCESS_TOKEN)

    return (

        
        <>
            <header className="h-[50px] bg-black px-6 py-2 text-white  flex justify-between items-center">
                
                <div>
                    <LogoIcon />
                   
                </div>
                

                <div className="flex gap-4">
                    <div  className=" relative flex  items-center">
                        <ShoppingCart/>


                <span  className=" absolute left-1/2  bottom-1/2 bg-red-500  rounded-full w-5 h-5  text-center text-white   text-xs leading-5">{numberOfCarts} </span>
                        

                    </div>

                    
                       
                        
                        {
                            user !== null ?(
                                
                                <div className="flex gap-2 items-center">
                                <Menu
                                    list ={[
                                        {id:1,child:<button onClick={()=>{
                                            dispath(logout())
                                        }}>Logout</button>},

                                        {id:2,
                                         child:<Link to="/change-password">Change Password</Link>
                                        }
                                    ]}
                                  >
                                    <p>Tran.tri</p>
                                    <Avatar>D</Avatar>
                                </Menu>
                               
                               
                                </div>
                            ):(<div>
                                <Link to="/login" className  ="border border-white px-2 py-1">Login</Link>
                                <Link to="/sign-up" className  ="border border-white px-2 py-1 border-1-0" >Register</Link>
                            </div>
                            )
                        }
                      



                </div>


            </header>
        </>
    )
}