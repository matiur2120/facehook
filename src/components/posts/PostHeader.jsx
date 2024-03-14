import { useState } from "react";
import Three_Dots from "../../assets/icons/3dots.svg";
import Delete_Icon from "../../assets/icons/delete.svg";
import Edit_Icon from "../../assets/icons/edit.svg";
import Time_Icon from "../../assets/icons/time.svg";
import { useAvatar } from "../../hooks/useAvatar";
import { getDateDifferenceFromNow } from "../../utils";
const PostHeader = ({ post }) => {
  const [showActions, setShowActions] = useState(false);
  const { author } = post;
  const { avatarUrl } = useAvatar(post);
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatarUrl}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{author?.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={Time_Icon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {getDateDifferenceFromNow(post?.createAt)}
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <button onClick={() => setShowActions((prev) => !prev)}>
          <img src={Three_Dots} alt="3dots of Action" />
        </button>
        {showActions && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={Edit_Icon} alt="Edit" />
              Edit
            </button>
            <button className="action-menu-item hover:text-red-500">
              <img src={Delete_Icon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
