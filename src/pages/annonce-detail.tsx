import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import AnnonceService from "../services/annonce-service";
import './annonce-detail.css';
import {Carousel, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Annonce from "../models/annonce";

type Params = { id: string };

const AnnonceDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [annonce, setAnnonce] = useState<Annonce|null>(null);

    useEffect(() => {
        AnnonceService.getAnnonce(+match.params.id).then(annonce =>setAnnonce(annonce));
    }, [match.params.id]);

    return (
        <div className="container">
            { annonce ? (
            <div className="row">

                <div className="col-lg-3">
                    <h1 className="my-4">Shop Name</h1>
                    <div className="list-group">
                        <a href="#" className="list-group-item active">Category 1</a>
                        <a href="#" className="list-group-item">Category 2</a>
                        <a href="#" className="list-group-item">Category 3</a>
                    </div>
                </div>

                <div className="col-lg-9">

                    <div className="card mt-4">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="http://placehold.it/900x400"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="http://placehold.it/900x400"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="http://placehold.it/900x400"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                            <div className="card-body">
                                <h3 className="card-title"> {annonce.user!.firstName}</h3>
                                <h4>$24.99</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores,
                                    sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure,
                                    ducimus!</p>
                                <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                                4.0 stars
                            </div>
                    </div>

                    <div className="card card-outline-secondary my-4">
                        <div className="card-header">
                            Product Reviews
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam
                                inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam
                                aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam
                                    inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam
                                    aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                <hr />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam
                                        inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                                        laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                                        natus.</p>
                                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                    <hr />
                                        <a href="#" className="btn btn-success">Leave a Review</a>
                        </div>
                    </div>

                </div>

            </div>
            ) : (
                <h4 className="center">CHARGEMENT ...</h4>
            )}
        </div>
    );
};

export default AnnonceDetail;