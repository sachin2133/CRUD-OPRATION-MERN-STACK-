import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateUser() {

    const users = {
        fname: '',
        lname: '',
        email: ''
    }
    const [user, setuser] = useState(users)
    const navigate = useNavigate()

    const inputhandler = (e) => {
        const { name, value } = e.target;
        setuser({ ...setuser, [name]: value })

    }
    const { id } = useParams()
    useEffect(() => {

        axios.get(`http://localhost:4440/api/getone/${id}`).then((res) => {
            setuser(res.data)

        }).catch((err) => {
            console.log(err);

        })
    }, [])
    const submitForm = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4440/api/update/${id}`, user).then((res) => {
            console.log(res);
            toast.success("User Updated", { position: "top-right" })
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
                <h2 className="text-2xl font-bold mb-6 text-center">UPDATE USER</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={user.fname}
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
                        value={user.lname}
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
                        value={user.email}
                        onChange={inputhandler}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
                >
                    UPDATE USER
                </button>
            </form>
        </div>

    )
}
