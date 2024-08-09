
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import useAxiosPublic from "../../../Hook/useAxiosPublic";


const Teacher = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleTeacher = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const experience = form.experience.value;
        const category = form.category.value;
        const photo = form.photo.value;
        console.log({ name, email, title, experience, category, photo })

        const currentUser = {
            name: name,
            email: email,
            category: category,
            experience: experience,
            title: title,
            photo: photo,
            role: 'student',
            status: 'pending',
        };

        axiosPublic.put('/teacher', currentUser)
            .then((res) => {
                console.log(res)
                if (res.data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="bg-orange-50 mt-10 p-3">
            <form onSubmit={handleTeacher} className="lg:w-[900px] mx-auto w-full">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-2">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Name</label>
                        <input type="text" name="name" id="" defaultValue={user?.displayName} placeholder="Name" className="p-3 w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Image</label>
                        <input type="url" name="photo" id="" defaultValue={user?.photoURL} placeholder="Picture" className="p-3 w-full" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-2">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Email</label>
                        <input type="email" name="email" id="" defaultValue={user?.email} placeholder="Email" className="p-3 w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Experience</label>
                        <select name="experience" id="" className="p-3 w-full">
                            <option value="Beginner">Beginner</option>
                            <option value="Experienced">Experienced</option>
                            <option value="Mid level">Mid level</option>
                        </select>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-2">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Title</label>
                        <input type="text" name="title" id="" placeholder="Title" className="p-3 w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Category</label>
                        <select name="category" id="" className="p-3 w-full">
                            <option value="Web development">Web development</option>
                            <option value="App development">App development</option>
                            <option value="Digital marketing">Digital marketing</option>
                            <option value="UI & UX design">UI & UX design</option>
                            <option value="Spoken english">Spoken english</option>
                        </select>
                    </div>
                </div>
                <button className="btn w-full mt-2 bg-primary text-white">Submit</button>
            </form>
        </div>
    );
};

export default Teacher;