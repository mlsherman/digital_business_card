import React from 'react'

export default function Info() {
    return (
        <main className="container">
            
            <img src="IMG_6571.png" />
            <h1>Marco Sherman</h1>
            <h3>Frontend Developer</h3>
            <h4>Scrimba Bootcamp</h4>
           
            <div className="links">
            <button className="btn"><i className="fa fa-envelope" aria-hidden="true">Email</i></button>
            <button className="linked"><i className="fa fa-linkedin-in" aria-hidden="true"> LinkedIn</i></button>
            </div>
        </main>
    )
}