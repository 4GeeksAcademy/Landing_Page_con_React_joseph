import React from "react";

const Footer = () => {
    return (
        <div id="contact">
        <div className="contain-fluid d-flex bg-black mt-3">
            <div className="row d-flex align-self-center marginCopyright">
              <div className="col-12 text-white mt-3">
                    <p>Copyright © ESLO 2025</p>
</div>
</div>
            <div className="row align-items-baseline mt-3 ms-auto">
              
                <div className="col-1">
                        <a href="https://www.instagram.com/vntovar" target="blank"><i class="fa-brands fa-instagram text-white fs-2 anchorsFooter"></i></a>
                        </div>
                        <div className="col-2 ms-2">
                        <a className="text-warning text-decoration-none anchorsFooter" href="https://www.instagram.com/vntovar" target="blank">eslo.edu</a>
                        </div>
                        <div className="col-1 ms-3">
                        <a href="https://www.instagram.com/vntovar" target="blank"><i class="fa-brands fa-facebook text-white fs-2 anchorsFooter"></i></a>
                        </div>
                         <div className="col-4 ms-2">
                        <a  className="text-warning text-decoration-none anchorsFooter" href="https://www.instagram.com/vntovar" target="blank">Eslo Educa</a>
                        </div>
                </div>
        </div>
        </div>
    )
};

export default Footer;