import useAuth from "../../../Hook/useAuth";
import useRole from "../../../Hook/useRole";


const TeachProfile = () => {
    const {user} = useAuth()
    const [role] = useRole()

    return (
        <div className="bg-orange-50 mt-10">
            <div className="w-[600px] mx-auto p-3 ">
                    <img src={user?.photoURL} alt="" className="rounded-full w-[100px] h-[100px] mx-auto" />
                    <div className="text-center space-y-3">
                        <h2 className="text-xl font-semibold mt-2 uppercase">User Role : {role}</h2>
                        <h2 className="text-xl font-semibold mt-2 uppercase">User Name : {user?.displayName}</h2>
                        <h2 className="text-xl font-semibold mt-2 uppercase">User Email : {user?.email}</h2>
                    </div>
            </div>
        </div>
    );
};

export default TeachProfile;