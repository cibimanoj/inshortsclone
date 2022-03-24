import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/cibi-manoj-115163186/" target="__blank">
          Cibi manoj.P
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/just_call_me_cibi/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/cibi-manoj-115163186/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/cibimanoj" target="__blank">
        <i class="fa-brands fa-github-square fa-2x"></i>
        </a>
      </div>
    </div>
  )
}
