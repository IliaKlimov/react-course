import {Link} from "react-router-dom";
import {FaExclamationTriangle} from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <section className="text-center flex flex-col justify-center items-center h-96">
            <FaExclamationTriangle className="text-9xl text-yellow-500  mb-4"/>
            <h1 className="text-3xl font-bold mb-4">Page not found</h1>
            <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded">
                Go back to home
            </Link>
        </section>
    )
}
export default NotFoundPage