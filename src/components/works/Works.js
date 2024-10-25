/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import ReactPortfolioImg from '../../assets/recentprojects/rezki.webp';
import GagasStudioImg from '../../assets/recentprojects/gagas.webp';
import UmrohHajiImg from '../../assets/recentprojects/umroh.webp';
import SungaiSailImg from '../../assets/recentprojects/sungaisail.webp';
import PPDBWebAppImg from '../../assets/recentprojects/ppdb.webp';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio Image',
      image: `${ReactPortfolioImg}`,
      url: 'https://rezkisuryana.vercel.app'
    },
    { 
      id: 2,
      title: 'Gagas Studio', 
      description: `A creative studio that provides design and branding services. built using customize wordpress.`,
      alter: 'Gagas Studio Image',
      image: `${GagasStudioImg}`,
      url: 'https://gagasstudio.co.id'
    },
    { 
      id: 3,
      title: 'PPDB Web App', 
      description: `An online admission (PPDB) web application built using React Js and PHP Laravel. It is designed for educational institutions to manage the admission process, complete with SEO optimization and a user-friendly interface.`,
      alter: 'PPDB Web App Image',
      image: `${PPDBWebAppImg}`,
      url: 'https://ppdbabudzar.evolusidigital.id/'
    },
    { 
      id: 4,
      title: 'Umroh Haji Abu Dzar', 
      description: `A website for a travel agency specializing in Umrah and Hajj services, built with WordPress.`,
      alter: 'Umroh Haji Abu Dzar Image',
      image: `${UmrohHajiImg}`,
      url: 'https://umrohhajiabudzar.com/'
    },
    { 
      id: 5,
      title: 'SungaiSail', 
      description: `Corporate website built with WordPress for a general contractor company, focusing on delivering high-quality results and timely project completion.`,
      alter: 'SungaiSail Image',
      image: `${SungaiSailImg}`,
      url: 'https://sungaisail.id/'
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="title">
                  <TextDecrypt text={ project.title } />
                </h3>
              </a>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
