import React from "react";
import Products from "./Products";



const Home = () => {
    return (
        <div className="hero">
            <div className="ratio ratio-16x9 bg-dark text-white">
                <iframe src="https://giphy.com/embed/KXdCe1y4mSFSo" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container mt-5">
                        <h5 className="card-title display-3 fw-bolder mb-0">Vogue Venture</h5>
                        <p className="card-text lead fs-2">
                            Belanja murah banyak diskonnya, jangan sampe kehabisan ya!
                        </p>
                    </div>
                </div>    
            </div>
            <Products />
        </div>
    );
}

export default Home;