import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "./../Provider/AuthProviders";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !!user?.email, // Prevents fetching when user is not logged in
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/carts`);
            return res.data;
        },
    });

    return [cart, refetch];
};

export default useCart;
