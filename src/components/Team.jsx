import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CloseMenu } from "../actions";

export const Team = () => {
  const ham = useSelector((state) => state.HamReducer);
  const dispatch = useDispatch();
  const team = [
    {
      id: 1,
      name: "Ethan winters",
      role: "Business Owner",
      photo:
        "https://i.ibb.co/QkMQsJ6/photo-1549473448-5d7196c91f48-Photo-Room-png-Photo-Room-2.png",
    },
    {
      id: 2,
      name: "Sasha coft",
      role: "Sales Executive",
      photo:
        "https://i.ibb.co/qNt6QZY/photo-1573496359142-b8d87734a5a2-Photo-Room-png-Photo-Room-2.png",
    },
    {
      id: 3,
      name: "Arjun kohli",
      role: "Project Manager",
      photo:
        "https://i.ibb.co/wN8F2dZ/2-f41d050c1c5b9e59fc22-Photo-Room-png-Photo-Room.png",
    },
  ];

  useLayoutEffect(() => {
    if (ham === true) {
      dispatch(CloseMenu());
    }
  }, []);
  return (
    <div>
      <p className="team-section-header">Our team</p>
      <div className="team-clg">
        {team.map((para) => {
          return (
            <div key={para.id} className="team-man">
              <img src={para.photo} alt={para.name} />
              <p className="team-man-name">{para.name}</p>
              <p className="team-man-role">{para.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
