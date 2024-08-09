import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const TeacherReq = () => {
    
    const axiosSecure = useAxiosSecure();
    const { data: teachers = [], refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/teacher');
            return res.data;
        }
    })

    const handleTeacherReq = teacher => {
        axiosSecure.patch(`/teacher/${teacher._id}/${teacher?.email}`)
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className="bg-orange-50 mt-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Name</th>
                            <th>Image</th>
                            <th>Experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            teachers.map(teacher => <tr key={teacher._id} className="text-center">
                                <td>{teacher.name}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={teacher.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{teacher.experience}</td>
                                <td>{teacher.title}</td>
                                <td>{teacher.category}</td>
                                <td>{teacher.status}</td>
                                <td>
                                    {
                                        teacher.role === 'teacher' ? 'Teacher' : <button onClick={() => handleTeacherReq(teacher)} className="btn">Accepted</button>
                                    }
                                </td>
                                <td>
                                    <button className="btn">Close</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherReq;