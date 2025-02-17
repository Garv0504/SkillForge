import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {

  const { currency, calculateRating } = useContext(AppContext)

  return (
    <Link to={'/course/'+course._id} onClick={()=> scrollTo(0,0)}
      className='bg-white/60 backdrop-blur-md border border-gray-200 pb-6 rounded-md overflow-hidden'>
      <img className='w-full' src={course.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>GreatStack</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i)=>(<img className='w-3.5 h-3.5' key={i} 
              src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}/>))}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>
        <p>{currency}{(course.coursePrice - course.discount * course.coursePrice /100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard