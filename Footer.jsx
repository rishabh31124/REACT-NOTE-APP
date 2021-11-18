import React from 'react';
import "./style.css";
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer>
                <p className = "text-center text-muted">Copyright ⓒ {year}</p>
            </footer>
        </div>
    )
}
