import React from "react";
import './Footer.css'; 

function Footer() {
    return (
        <div>
            <div className="input-group">
                <label className="input-label" htmlFor="Tags">Tags</label>
                <input
                    className="Tag"
                    id="Tags"
                    type="text"
                    placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
                />
            </div>

            <div>
                    <br />
                <div className="button-container">
                    <button class="ui button"> Post</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;