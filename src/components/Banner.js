import React from "react";

export default function Banner({ children, title, subtittle }) {
  return (
    <div className="banner">
      <h1>{title} </h1>
      <div> </div>
      <p>{subtittle}</p>
      {children}
    </div>
  );
}
