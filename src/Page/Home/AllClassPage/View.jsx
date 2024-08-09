import { Link, useLoaderData, useParams } from "react-router-dom";


const View = () => {
    const classLoad = useLoaderData()
    const {id} = useParams()

    const data = classLoad.find(data => data._id === id)
    console.log(data)
    const {name,  title, price, description, image} = data


    return (
        <div className="mt-10 bg-orange-50 p-3">
            <div className="flex items-center lg:flex-row flex-col">
                <img className="lg:w-[600px] w-[400px] p-3" src={image} alt="" />
                <div className="p-3 space-y-3">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p>{description}</p>

                    <div className="flex lg:flex-row flex-col justify-between gap-3">
                        <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Name: </span> {name}</h2>
                        <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$ {price}</h2>
                        <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Total Enroll:</span> 100</h2>
                    </div>

                    <Link to="/pay">
                        <button className="btn bg-primary text-white mt-2 w-full">Pay Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default View;