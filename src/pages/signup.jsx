import axios from "axios";
import { Input } from "../components/input";
import { SelectGender } from "../components/selected";
import { useFormik } from "formik";

import { z } from 'zod';
import { useNavigate } from "react-router";

const RegisterSchema = z.object({
    email: z.string().email("Email is invalid").nonempty("Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters long").nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits").nonempty("Phone number is required"),
    name: z.string().min(2, "Name must be at least 2 characters long").nonempty("Name is required"),
    gender: z.enum(["1", "2"], { required_error: "Gender is required" }),
}).superRefine((val, ctx) => {
    if (val.password && val.password.toLowerCase().includes("password")) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Password cannot contain the word 'password'",
            path: ["password"],
        });
    }
});

export function ErrorMessage({ message }) {
    return (
        <>
            <div className="text-red-500 text-sm">
                {message}
            </div>
        </>
    )
}

export default function Signup() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            name: "",
            gender: "1",
        },

        onSubmit(values) {
            console.log(values);
            axios.post("https://shop.cyberlearn.vn/api/Users/signup",{
                email:values.email,
                password:values.password,
                name:values.name,
                phone:values.phone,


                gender :values.gender === "2"

            }).then((response)=>{
                    console.log("registration successfull",response.data);
                    navigate("/login");
            }).catch((error)=>{

                console.log("There was an  error registratering ",error)
            });
        },
        validate(values) {
            try {
                RegisterSchema.parse(values);
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
    }
)
    return (
        <>
            <form onSubmit={formik.handleSubmit}
             className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg max-w-4xl mx-auto">
                <h1 className="col-span-2 text-3xl font-extrabold text-center text-blue-800 mb-6">
                    Register
                </h1>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Email
                        </label>
                        <Input
                            {...formik.getFieldProps("email")}
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            message={formik.touched.email && formik.errors.email}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Phone
                        </label>
                        <Input
                            name="phone"
                            {...formik.getFieldProps("phone")}
                            placeholder="Enter your phone number"
                            className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            message={formik.touched.phone && formik.errors.phone}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Password
                        </label>
                        <Input
                            {...formik.getFieldProps("password")}
                            placeholder="Enter your password"
                            type="password"
                            className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Confirm Password
                        </label>
                        <Input
                            {...formik.getFieldProps("confirmPassword")}
                            placeholder="Confirm your password"
                            type="password"
                            className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Name
                        </label>
                        <Input
                            {...formik.getFieldProps("name")}
                            placeholder="Enter your name"
                            className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-blue-700">
                            Gender
                        </label>
                        <div className="flex items-center space-x-6 mt-2">
                            <label className="flex items-center">
                                <input
                                    {...formik.getFieldProps("gender")}
                                    type="radio"
                                    value={"1"}
                                    name="gender"
                                    className="h-4 w-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                                    checked={formik.values.gender === "1"}
                                />
                                <span className="ml-2 text-sm text-blue-700">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...formik.getFieldProps("gender")}
                                    type="radio"
                                    value={"2"}
                                    name="gender"
                                    className="h-4 w-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                                    checked={formik.values.gender === "2"}
                                />
                                <span className="ml-2 text-sm text-blue-700">Female</span>
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-md shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </>
    );
}