import JobListing from "./JobListing.jsx";
import {useEffect, useState} from "react";
import Spinner from "./Spinner.jsx";


const JobListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchJobs = async () => {
            console.log(!isHome);
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (e) {
                console.log("Error fetching data", e);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();

    }, []);

    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? "Recent Jobs" : "Featured"}
                </h2>
                <Spinner loading={loading}/>
                {loading ? (
                    <></>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {jobs.map(
                            (job) => (<JobListing key={job.id} job={job}/>)
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;