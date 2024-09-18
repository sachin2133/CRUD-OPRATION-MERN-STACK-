import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function GetUser() {



    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const res = await axios.get("http://localhost:4440/api/getdata")
            setdata(res.data)
        }
        fetchdata()
    }, [])

    const handledelete = async (e) => {
      
        await axios.delete(`http://localhost:4440/api/delete/${e}`).then((res) => {
            toast.success("User Delete Successfully",{position:"top-right"})
            setdata((prevuser) => prevuser.filter((user) => user._id !== e))
            console.log("responsee==========>", res);

        }).catch((err) => {
            console.log(err);

        })
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl">
                {/* Button on top of the table */}
                <div className="flex justify-end mb-4">
                    <Link to='/Add'>  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-200">
                        Add New User
                    </button>
                    </Link>
                </div>

                {/* Table */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="min-w-full table-auto">
                        {/* Table Head */}
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold">S.No</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold">Username</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold">User Email</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold">Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {data.map((user, index) => (
                                <tr key={user.id} className="bg-white border-b hover:bg-gray-100 transition duration-150">
                                    <td className="px-4 py-2 text-sm">{index + 1}</td>
                                    <td className="px-4 py-2 text-sm">{user.fname}{user.lname}</td>
                                    <td className="px-4 py-2 text-sm">{user.email}</td>
                                    <td className="px-4 py-2 flex space-x-4">
                                        {/* Edit Button with Icon */}
                                        <button

                                            className="text-blue-500 hover:text-blue-700 transition duration-200"
                                        >
                                            <Link to={`/updateuser/` + user._id}> <FaEdit size={20} /></Link>
                                        </button>

                                        {/* Delete Button with Icon */}
                                        <button

                                            className="text-red-500 hover:text-red-700 transition duration-200"
                                        >
                                            <FaTrashAlt size={20} onClick={() => handledelete(user._id)} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Bottom part */}
                    <div className="px-4 py-2 bg-gray-50 text-right">
                        <p className="text-sm text-gray-600">Showing {data.length} users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
