import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)

    const navigate = useNavigate()

    // Fetch all courses     
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    // to calculate the average rating of all course
    const calculateRating = (course) => {
        if(course.courseRatings.length == 0) {
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating
    }

    // to calculate the lecture duration
    const calculateChapterTime = (chapter) => {
        let time = 0
        chapter.chapterContent.map((lecture) => time = time + lecture.lectureDuration)

        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})
    }

    // to calculate the complete course duration
    const calculateCourseTime = (course) => {
        let time = 0
        course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time = time + lecture.lectureDuration))

        return humanizeDuration(time*60*100, {units: ['h','m']})
    }

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length
            }
        })
        return totalLectures
    }

    useEffect(()=> {
        fetchAllCourses()
    },[])

    const value = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator,
        calculateCourseTime,
        calculateChapterTime,
        calculateNoOfLectures
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}