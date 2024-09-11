import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

interface Props {
  children: string;
  onClick: () => void;
}

function Like({ children, onClick }: Props) {
  const [status, setStatus] = useState(true);

  const ToggleStatus = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <IoIosHeartEmpty color="#ff6b81" size={20} onClick={ToggleStatus} />;
  return <FaHeart size={20} onClick={ToggleStatus}></FaHeart>;
}

export default Like;
