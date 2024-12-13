import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setGroups } from "../slices/groupSlice";
import { useGetItemsQuery } from "../api/api";
// Artesano bussiness logic hook
export const useGroups = () => {
    const dispatch = useDispatch();
    const {data: fetchedGroups } = useGetItemsQuery({});
    dispatch(setGroups(fetchedGroups));
    const { groups } = useSelector((state: RootState) => state.group);
    return { groups , dispatch };
};