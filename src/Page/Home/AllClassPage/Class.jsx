import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Class = () => {
    const axiosPublic = useAxiosPublic()
    const { data: dataclass = [], refetch } = useQuery({
        queryKey: ['dataclass'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allclass`);
            return res.data;
        }
    })

    return (
        <div className="mt-10 bg-orange-50 p-3">
            <div className="grid lg:grid-cols-4 grid-cols-1">
                {
                    dataclass.map(classData => <div key={classData._id} className='w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src={classData.image} alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>{classData.title}</h2>
                            <p>{classData.description}</p>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$ {classData.price}</h2>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Total Enroll:</span> 100</h2>
                            </div>
                            <div>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Name: </span> {classData.name}</h2>
                            </div>

                            <Link to={`/view/${classData._id}`}>
                                <button className='btn bg-primary w-full text-white mt-2'>Enroll</button>
                            </Link>
                        </div>
                    </div>)
                }
                {/* <div className='w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                    <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                    <div className='mt-3 p-2 space-y-3'>
                        <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                        <p>A study of the programming and scripting languages, frameworks and tools used to develop web and distributed applications</p>
                        <div className='flex items-center gap-5'>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$500</h2>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Total Enroll:</span> 100</h2>
                        </div>
                        <div>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Name: </span> Mr.John</h2>
                        </div>
                        <button className='btn bg-primary w-full text-white'>Enroll</button>
                    </div>
                </div>

                <div className='w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                    <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                    <div className='mt-3 p-2 space-y-3'>
                        <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                        <p>A study of the programming and scripting languages, frameworks and tools used to develop web and distributed applications</p>
                        <div className='flex items-center gap-5'>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$500</h2>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Total Enroll:</span> 100</h2>
                        </div>
                        <div>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Name: </span> Mr.John</h2>
                        </div>
                        <button className='btn bg-primary w-full text-white'>Enroll</button>
                    </div>
                </div>

                <div className='w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                    <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                    <div className='mt-3 p-2 space-y-3'>
                        <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                        <p>A study of the programming and scripting languages, frameworks and tools used to develop web and distributed applications</p>
                        <div className='flex items-center gap-5'>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$500</h2>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Total Enroll:</span> 100</h2>
                        </div>
                        <div>
                            <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Name: </span> Mr.John</h2>
                        </div>
                        <button className='btn bg-primary w-full text-white'>Enroll</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Class;