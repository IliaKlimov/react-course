import logo from '../assets/images/logo.png';
import {NavLink} from 'react-router-dom';


const NavBar = () => {

    const linkClass = ({isActive}) => {
        if (isActive) {
            return "text-white bg-black hover:text-gray-300 text-l rounded-md py-1 px-2 ml-2";
        } else {
            return "text-white hover:text-gray-300 text-l rounded-md py-1 px-2 ml-2";
        }
    }

    return (
        <nav className="bg-green-600 border-b border-green-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center
            md:items-stretch md:justify-start">
                        <NavLink className="flex flex-shrink-0 items-center mr-4"
                                 to="/"
                        >
                            <img
                                className="h-8 w-auto rounded-full"
                                src={logo}
                                alt="Work with us"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                            React jobs
                        </span>
                        </NavLink>


                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>
                                    Home
                                </NavLink>
                                <NavLink to="/jobs" className={linkClass}>
                                    Jobs
                                </NavLink>
                                <NavLink to="/add-job" className={linkClass}>
                                    Add Job
                                </NavLink>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;