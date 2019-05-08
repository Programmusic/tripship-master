import React from "react"
import { Link } from 'gatsby'

export default () => (
  <div style={{ color: `teal` }}>
 <Link to="/">back to the main deck</Link>

    <h1>Jamstackin' with Flystyle</h1>
    <p>Such Panache. So Open Source. So Very React. Everything lives in Git.</p>
    <img src="https://source.unsplash.com/random/400x200" alt=""/>
       <Link to="/crew/">Back to Crew Quarters</Link>
  </div>
)
