import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function AddUser() {

    const users = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    }
    const [user, setuser] = useState(users)
const navigate=useNavigate()


    const inputhandler = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })

    }
    const submitForm = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4440/api/create", user).then((res) => {
          console.log(res);
         toast.success("User Add successfully",{position:"top-right"}) 
navigate("/")
        }).catch((err) => {
            console.log(err);

        })
    }
    return (


        <div className="flex justify-center items-center min-h-screen bg-gray-100">

            <form onSubmit={submitForm}

                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            >
                <Link to={"/"} className='  bg-zinc-200 p-2  rounded-lg'>Back</Link>
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        onChange={inputhandler}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your first name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"

                        onChange={inputhandler}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your last name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"

                        onChange={inputhandler}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"

                        onChange={inputhandler}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}
