import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const AllClass = () => {

    const axiosSecure = useAxiosSecure()

    const { data: allclass = [], refetch } = useQuery({
        queryKey: ['allclass'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allclass');
            return res.data;
        }
    })

    return (
        <div>
            <div className="bg-orange-50 mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>Title</th>
                                <th>Image</th>
                                <th>description</th>
                                <th>Email</th>
                                <th>Status 1</th>
                                <th>Status 2</th>
                                <th>Status 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allclass.map(Data => <tr key={Data._id} className="text-center">
                                    <td>{Data.title}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={Data.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{Data.description}</td>
                                    <td>{Data.email}</td>
                                    <td>

                                        <button className="btn">Approved</button>

                                    </td>
                                    <td>

                                        <button className="btn">Reject</button>

                                    </td>
                                    <td>

                                        <button className="btn">See progress</button>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllClass;