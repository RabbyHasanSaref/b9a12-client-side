import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: 'https://online-edu-bd-server-side.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;