
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";



const AddClass = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const handleAddClass = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const title = form.title.value
        const price = form.price.value
        const description = form.description.value
        const image = form.photo.value
        console.log({ name, email, title, price, description, image })
        const addClass = {
            name,
            email,
            title,
            price,
            description,
            image
        }

        axiosSecure.post('/addclass', addClass)
            .then((res) => {
                console.log(res)
                if (res.data.insertedId) {
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
            <form onSubmit={handleAddClass} className="lg:w-[900px] mx-auto w-full">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-2">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Title</label>
                        <input type="text" name="title" id="" placeholder="Title" className="p-3 w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Name</label>
                        <input type="text" name="name" id="" value={user?.displayName} placeholder="Name" className="p-3 w-full" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-2">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Email</label>
                        <input type="email" name="email" id="" value={user?.email} placeholder="Email" className="p-3 w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Price</label>
                        <input type="text" name="price" id="" placeholder="Price" className="p-3 w-full" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-2">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Description</label>
                        <input type="text" name="description" id="" placeholder="Description" className="p-3 w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="text-[15px] font-medium">Image</label>
                        <input type="url" name="photo" id="" placeholder="Image" className="p-3 w-full" />
                    </div>
                </div>
                <button className="btn w-full mt-2 bg-primary text-white">Add Class</button>
            </form>
        </div>
    );
};

export default AddClass;