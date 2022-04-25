import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";

const DetailCardLoader = () => {
    React.useEffect(() => {
        runHolder("image-class-name");
    }, []);
    return (
        <>
            <div className="col-md-4">
                <div className="product-item">
                    <div className="product-title">
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <div className="ratting">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="product-image">
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </div>
                    <div className="product-price">
                        <h3>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </h3>

                        <Placeholder.Button variant="danger" xs={6} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailCardLoader;
