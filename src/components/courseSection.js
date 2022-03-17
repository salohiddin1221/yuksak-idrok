import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/courseCard.scss";
import Slider from 'react-slick';
import {FaUserPlus} from "react-icons/fa"
import { BsStarFill} from "react-icons/bs"
import {MdReadMore} from "react-icons/md"
import { Link } from "react-router-dom";
import { API_URL } from '../utils/axios';

const CourseSection = () => {
 
    const [course, setCourse] = useState([]);


    



    useEffect(() => {
        const getCourse = async () => {
            await axios.get(`${API_URL}/courses`)
                .then(res => {
                    let data = res.data.courses
                    if (data) {
                        setCourse(data);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        };
        getCourse();
    }, []);

    return (
        <div className="courseSection my-20">
            <div className="container mx-auto">
                <h1 className="text-center uppercase text-2xl text-black font-bold sm:mb-10">kurslar</h1>

                <div className="grid grid-cols-3 gap-6">
                    {
                        course.length ?

                            course.map((item, index) => {
                                return (
                                    <div key={item.id} className="course-card bg-white shadow-lg w-full rounded-2xl overflow-hidden">

                                        <div className="flex items-center justify-between w-full py-2 px-4">
                                            <div className="flex items-center justify-between w-full">

                                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                                <div className="flex items-center ml-2">
                                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat"
                                            }}
                                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                                        </div>

                                        <div className="flex items-center justify-center my-6">
                                            <h1 className="uppercase text-lg text-gray-500 font-bold">
                                                {item.title}
                                            </h1>
                                        </div>

                                        <div className="px-4">
                                            <Link to="/courses/more"
                                                  className="mb-3 py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10 uppercase">
                                                batafsil malumot
                                            </Link>
                                            <div className="flex justify-around mb-5">
                                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })

                            : <h1>Iltimos kuting</h1>
                    }
                </div>

            </div>
        </div>
    );
};

export default CourseSection;