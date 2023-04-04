import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

import {
    CarouselImage,
    CarouselImageContainer,
    Container, FooterContainer, FooterText,
    GlassCard,
    GlassCardContainer,
    GradientText,
    IframeContainer,
    InfoText,
    ParallaxCarousel, SocialMediaContainer, SocialMediaIcon,
} from "./LandingPage.styles";
import {
    DESCRIPCION_RADEK,
    FOTOS_EVENTOS,
    IMAGENES_CARRUSEL,
    LINKS_REDES_SOCIALES,
    PODCASTS_URLS
} from "../Configuracion";

const Podcasts = () => {
    return (
        <div>
            <InfoText>
                <GradientText>Podcasts</GradientText>
            </InfoText>
            <GlassCardContainer>
                {PODCASTS_URLS.map((url, index) => (
                    <GlassCard key={index}>
                        <ReactPlayer url={url} width={"100%"}/>
                    </GlassCard>
                ))}
            </GlassCardContainer>
        </div>
    );
};
const Descripcion = () => {
    return (
        <div>
            <InfoText>
                <GradientText>¿Quienes somos?</GradientText>
            </InfoText>
            <GlassCardContainer>
                    <GlassCard >
                        <p style={{color:"white", textAlign: "center"}}>
                            {DESCRIPCION_RADEK}
                        </p>
                    </GlassCard>
            </GlassCardContainer>
        </div>
    );
};
const Eventos = () => {
    return (
        <div>
            <InfoText>
                <GradientText>Próximos eventos </GradientText>
            </InfoText>
            <GlassCardContainer>
                {FOTOS_EVENTOS.map((url, index) => (
                    <GlassCard key={index}>
                        <img src={url} alt={"evento"} width={"100%"} height={"100%"}/>
                    </GlassCard>
                ))}
            </GlassCardContainer>
        </div>
    );
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>© 2023 - Radek Kollektiv - All rights reserved.</FooterText>
            <SocialMediaContainer>
                <SocialMediaIcon href="https://www.facebook.com" target="_blank">
                    <i className="fab fa-facebook-f" />
                </SocialMediaIcon>
                <SocialMediaIcon href="https://www.instagram.com" target="_blank">
                    <i className="fab fa-instagram" />
                </SocialMediaIcon>
                <SocialMediaIcon href="https://www.twitter.com" target="_blank">
                    <i className="fab fa-twitter" />
                </SocialMediaIcon>
            </SocialMediaContainer>
        </FooterContainer>
    );
};

const RedesSociales = () => {
    return (
        <div>
            <InfoText>
                <GradientText>Redes sociales</GradientText>
            </InfoText>
            <GlassCardContainer>
                {LINKS_REDES_SOCIALES.map((socialMedia, index) => (
                    <GlassCard key={index}>
                        <IframeContainer>
                            <iframe
                                src={socialMedia.src}
                                width={socialMedia.width}
                                height={socialMedia.height}
                                scrolling={socialMedia.scrolling}
                            ></iframe>
                        </IframeContainer>
                    </GlassCard>
                ))}
            </GlassCardContainer>
        </div>
    );
};

const ArtistLandingPage = () => {
    const [ref, inView] = useInView({ threshold: 0.5 });
    const controls = useAnimation();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 1, y: 50 });
        }
    }, [controls, inView]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage((currentImage + 1) % IMAGENES_CARRUSEL.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentImage]);

    return (
        <Container>
            <ParallaxCarousel>
                {IMAGENES_CARRUSEL.map((image, index) => (
                    <CarouselImageContainer
                        key={index}
                        style={{ display: currentImage === index ? "block" : "none" }}
                    >
                        <CarouselImage src={image} alt={`Image ${index + 1}`} />
                    </CarouselImageContainer>
                ))}
            </ParallaxCarousel>
            <motion.div ref={ref} animate={controls}>
                <Descripcion/>
                <Podcasts />
                <RedesSociales />
                <Eventos />
            </motion.div>
            <Footer/>
        </Container>
    );
};

export default ArtistLandingPage;
