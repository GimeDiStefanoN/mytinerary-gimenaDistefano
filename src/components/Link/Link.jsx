import React from 'react'
import './Link.css'

const Link = ({title, to, icon}) => {
  if (icon) {
    return <a className="link link-hover icon-link" href={to} target="_blank" rel="noopener noreferrer"><img src={icon} alt={title} /></a>;
  } else {
    return <a className="link link-hover" href={to} >{title}</a>;
  }
}

export default Link