import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const MyClass = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()


    const { data: addclass = [], refetch } = useQuery({
        queryKey: ['addclass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allclass/${user.email}`);
            return res.data;
        }
    })

    // const handleUpdate = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const title = form.title.value
    //     const price = form.price.value
    //     const description = form.description.value
    //     const image = form.photo.value
    //     console.log({ name, email, title, price, description, image })
    // }

    return (
        <div className="mt-10 bg-orange-50 p-3">
            <div className="grid lg:grid-cols-3 grid-cols-1">
                {
                    addclass.map(teachClass => <div key={teachClass._id} className='w-[300px] overflow-hidden mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src={teachClass.image} alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>{teachClass.title}</h2>
                            <p>{teachClass.description}</p>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$ {teachClass.price}</h2>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>status: </span>pending</h2>
                            </div>
                            <div className='flex items-center'>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Name: </span>{teachClass.name}</h2>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Email: </span>{teachClass.email}</h2>
                            </div>
                            <div className='flex justify-between items-center'>
                                <Link >
                                    <button className='btn bg-green-500 w-full text-white mt-2'>Update</button>
                                </Link>
                                <Link>
                                    <button className='btn bg-red-500 w-full text-white mt-1'>Delete</button>
                                </Link>
                                <Link>
                                    <button className='btn bg-primary w-full text-white mt-1'>See details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClass;