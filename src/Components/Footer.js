import React from "react";

function Footer() {
    let year = new Date().getFullYear();

    return(
        <>
            <footer className="py-3 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright &copy; Web Scrapping Ecommerce Site at {year}
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;