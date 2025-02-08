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
        "https://i.imgur.com/oEnlblF.png",
    },
    {
      id: 2,
      name: "Sasha coft",
      role: "Sales Executive",
      photo:
        "https://i.imgur.com/Ui6HZjH.png",
    },
    {
      id: 3,
      name: "Arjun kohli",
      role: "Project Manager",
      photo:
        "https://i.imgur.com/ZBS9lmG.png",
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
