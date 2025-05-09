import { Input } from "../components/input"
import { z } from 'zod';
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router"
import { ErrorMessage } from "./signup";

import { KEY_ACCESS_TOKEN } from "../common/constants";
import { manageLocalStorage } from "../common/utils/local-storage.js";
import { axiosWithAuth } from "../service/config";
import { getProfileAPI} from "../service/user.service";

 import { useDispatch } from "react-redux";
import { setUser } from "../store/user.slice";

export default  function Login(){
    const LoginSchema = z.object({
        email: z.string().email("Email is invalid").nonempty("Email is required"),
        password: z.string().min(8, "Password must be at least 8 characters long").nonempty("Password is required"),
        
    })
    const navigate = useNavigate();
     const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit(values) {
            console.log(values);
            axios.post("https://shop.cyberlearn.vn/api/Users/signin",{

               
                email:values.email,
                password:values.password,
            }).then((response)=>{
                    console.log("registration successfull",response.data);
                    navigate("/");
                    // 1 lưu token vào local storage
                    manageLocalStorage.set(KEY_ACCESS_TOKEN,response.data.content.accessToken);
                // 2 lưu token vào redux
                    axiosWithAuth.get("https://shop.cyberlearn.vn/api/Users/signin");

                    getProfileAPI().then((response)=>{
                        console.log("get profile successfull",response.data);

                        dispatch(setUser(response.data.content));
                    })
                   
                    

            }).catch((error)=>{
                console.log("There was an  error registratering ",error)
            });
        },
        validate(values) {
            try {
                LoginSchema.parse(values);
            } catch (error) {
                console.log(error)
                const errors = error.errors.reduce((acc, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {});

                return errors;
            }

            return {}
        }
    })
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
                Login
            </h1>

            <form onSubmit={formik.handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div className="flex flex-col items-center space-y-4">
                    <Input
                        {...formik.getFieldProps("email")}
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"

                    />
                    <ErrorMessage
                            message={formik.touched.email && formik.errors.email}
                        />
                    <Input
                    {...formik.getFieldProps("password")}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage
                            message={formik.touched.password && formik.errors.password}
                        />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </div>
                <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <button
                    onClick={function(){
                    navigate("/sign-up")
                }  }
                className="text-blue-500 hover:underline"
                >
                Sign up
                </button>
            </p>
            </form>
            
        </div>
    )
}