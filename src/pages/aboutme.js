import React from "react"
import Layout from "../components/Layout";
import { Animated } from "react-animated-css"
const AboutMePage = () => (
  <Layout>
    <Animated animationIn="fadeInDownBig" isVisible={true}>About Me</Animated>
  </Layout>
)

export default AboutMePage;
