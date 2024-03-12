import { useEffect } from "react";
import { actions } from "../actions";
import MyPosts from "../components/profile/MyPosts";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/userProfile";

const ProfilePage = () => {
  const { state, dispatch } = useProfile();

  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);
  if (state?.loading) {
    return <div>Featching your profile data......</div>;
  }
  return (
    <>
      {/* Welcome, {state?.user?.firstName} {state?.user?.lastName} */}
      <ProfileInfo />

      <MyPosts />
      {/* <p>You have {state?.posts.length} posts</p> */}
    </>
  );
};

export default ProfilePage;
