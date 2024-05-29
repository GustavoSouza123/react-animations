import React from "react";
import Header from "./Header";
import Ball from "./Ball";
import "./css/index.css";

import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
    return (
        <Parallax className="container" pages={4}>

            <ParallaxLayer
                className="header"
                offset={0}
                speed={1}
            >
                <motion.div
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: 0.3, duration: 0.7 }}
                >
                    <Header />
                </motion.div>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax section"
                id="home"
                offset={0}
                speed={0.7}
                style={{
                    backgroundColor: '#000',
                    marginTop: '-50px',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", delay: 0.3, duration: 0.7 }}
                >
                    <h2>Hello world</h2>
                </motion.div>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax"
                offset={0}
                speed={1.3}
                style={{
                    marginTop: '50px',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", delay: 0.3, duration: 0.7 }}
                >
                    <h2>My name is Cubo</h2>
                </motion.div>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax section"
                id="about"
                offset={1}
                speed={1}
                style={{
                    backgroundColor: '#222',
                }}
            >
                <h2>My first React Spring app</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={1.2} speed={0.2}><Ball size={100} left="20" /></ParallaxLayer>
            <ParallaxLayer offset={1.8} speed={1.5}><Ball size={70} left="70" /></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={1.3}><Ball size={30} left="55" /></ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={2.5}><Ball size={130} left="30" /></ParallaxLayer>
            <ParallaxLayer offset={1.6} speed={1.8}><Ball size={110} left="10" /></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={0.5}><Ball size={50} left="80" /></ParallaxLayer>
            <ParallaxLayer offset={1.75} speed={0.1}><Ball size={50} left="30" /></ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={2}><Ball size={50} left="50" /></ParallaxLayer>

            <ParallaxLayer
                className="parallax section"
                id="projects"
                offset={2}
                speed={1}
                factor={2}
                style={{
                    backgroundColor: '#000',
                }}
            >
                <h2>Another section of my website</h2>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax section"
                id="contact"
                offset={3}
                speed={1}
                style={{
                    backgroundColor: '#222',
                }}
            >
                <h2>Last section</h2>
            </ParallaxLayer>

        </Parallax>
    );
}