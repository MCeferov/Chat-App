// Components
import ContactItem from "./ContactItem";

// Supabase
import supabase from "../../supabase";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { usersSliceActions } from "../../store/slices/usersSlice";

// Hooks 
import { useEffect } from "react"

const Contacts = () => {
const userId = useSelector((state) => state.user.id)
const users = useSelector((state) => state.users.users)

const dispatch = useDispatch()

  const getUsers = async () => {
    const {data,error} = await supabase.from("users").select()
    
    if(error) {
      console.log(error);
    }
    
    if(data) {
    const users = data.filter((u) => u.userId !== userId)
    dispatch(usersSliceActions.setUsers(users))
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
   {users.map((user) => (
    <ContactItem key={user.id} username={user.username}/>
   ))}
    </div>
  );
};

export default Contacts;
