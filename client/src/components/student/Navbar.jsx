import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'


const Navbar = () => {
  const isCourseListPage = location.pathname.includes('/course-list')

  const { navigate, isEducator } = useContext(AppContext)

  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 ${isCourseListPage ? 'bg-white-500' : 'bg-blue-300'}`}>
      {/* <img onClick={()=>navigate('/')} src={assets.logo} className='w-28 lg:w-32 cursor-pointer' alt="Logo"/> */}
      <h1 onClick={()=>navigate('/')} className='md:text-home-heading-large text-home-heading-small font-bold cursor-pointer'>Skill<span className='text-blue-700'>Forge.</span></h1>
      <div className='hidden md:flex items-center gap-5 text-gray-800'>
        <div className='flex items-center gap-5'>
          {user && <><button onClick={()=>navigate('/educator')}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
           | <Link to='/my-enrollments'>My Enrollments</Link> </>}
        </div>
        {user ? <UserButton/>
        : <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
        }
      </div>

      {/* { for mobile screens } */}
      <div className='md:hidden flex items-center gap-2 md:gap-5 text-gray-800'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user && <><button onClick={()=>navigate('/educator')}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
           | <Link to='/my-enrollments'>My Enrollments</Link></>}
        </div>
        {user ? <UserButton/>
        : <img onClick={()=> openSignIn()} src={assets.user_icon} alt="user_icon" />
        }
      </div>
    </div>
  )
}

export default Navbar