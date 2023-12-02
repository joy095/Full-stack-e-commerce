import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";

// import AdminMenu from "./AdminMenu";

const UserList = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  const [editableUserId, setEditableUserId] = useState(null);
  const [editableUserName, setEditableUserName] = useState("");
  const [editableUserEmail, setEditableUserEmail] = useState("");

  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">
          {error?.data.message || error.message}
        </Message>
      ) : (
        <div className="flex flex-col md:flex-row">
          {/* <AdminMenu /> */}
          <table className="w-full md:w4/5 mx-auto">
            <thead>
              <tr className="px-4 py-2 text-left">ID</tr>
              <tr className="px-4 py-2 text-left">NAME</tr>
              <tr className="px-4 py-2 text-left">EMAIL</tr>
              <tr className="px-4 py-2 text-left">ADMIN</tr>
            </thead>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
