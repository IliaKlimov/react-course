import {Link} from "react-router-dom";

const ViewAllJobs = () => (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link
            to="/jobs"
            className="block bg-black text-white text-center
        rounded-xl px-4 py-2 hover:bg-gray-700"
        >
            View all jobs
        </Link>
    </section>
);

export default ViewAllJobs