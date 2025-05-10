import { useFormik } from "formik"
import {z} from "zod";
import errorMap from "zod/locales/en.js";


const ChangePasswordSchema = z.object({
    newPassword:z.string().nonempty().min(8).max(50),
})
export default function ChangePassword(){
    const formik = useFormik({
        initialValues:{
            newPassword:"",
        },
        onSubmit(value){
            console.log(value);

            changePasswordAPI(value.newPassword).then(()=>{
                alert("change password success");
            }).catch(()=>{
                 alert("change password fail")
            })
        },
        validate(value){
            try{
                ChangePasswordSchema.parse(value);
            }catch(error){
                const errors =error.errors.reduce((acc,curr)=>{
                    acc[curr.path[0]] =curr.message;
                    return acc;
                },{})

                return errors
            }
        }
    })
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
                onSubmit={formik.handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Change Password</h2>
                <div className="mb-4">
                    <label 
                        htmlFor="newPassword" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        New Password
                    </label>
                    <input
                        {...formik.getFieldProps("newPassword")}
                        id="newPassword"
                        type="password"
                        placeholder="Enter new password"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            formik.touched.newPassword && formik.errors.newPassword
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                        <p className="text-sm text-red-600 mt-1">{formik.errors.newPassword}</p>
                    )}
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Save
                </button>
            </form>
        </div>
    )
}