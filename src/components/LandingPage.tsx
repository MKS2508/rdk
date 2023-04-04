import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

import {
    Card,
    CarouselImage,
    CarouselImageContainer,
    Container, Description, EmailLink, FooterContainer, FooterText,
    GlassCard,
    GlassCardContainer,
    GradientText,
    IframeContainer,
    InfoText, InstagramLink, LinkContainer, Name,
    ParallaxCarousel, ProfileImage, SocialMediaContainer, SocialMediaIcon, SoundCloudLink,
} from "./LandingPage.styles";
import {
    DESCRIPCION_RADEK,
    FOTOS_EVENTOS,
    IMAGENES_CARRUSEL,
    LINKS_REDES_SOCIALES, PERFILES_RDK,
    PODCASTS_URLS
} from "../Configuracion";
import SoundCloudPlayer from "./BandCampPlayer/BandCampPlayer";
import BandCampPlayer from "./SoundCloudPlayer/SoundCloudPlayer";

// @ts-ignore
const UserCard = ({ imageSrc, name, description, soundCloudUrl, instagramUrl, email, bandCampUrl }) => {
    return (
        <Card>
            <ProfileImage src={imageSrc} alt="Profile" />
            <Name>{name}</Name>
            <SoundCloudLink href={soundCloudUrl} target="_blank" rel="noopener noreferrer">
                SoundCloud Profile
            </SoundCloudLink>
            <LinkContainer>

                <InstagramLink href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    Instagram
                </InstagramLink>
                <EmailLink href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    Email 📥
                </EmailLink>
            </LinkContainer>
            <Description>{description}</Description>

            <h4>
                Listen some of my sets on:
            </h4>
            <label>SoundCloud</label>
            <SoundCloudPlayer url={soundCloudUrl} height={"20px"} width={"100%"}/>
            <label>BandCamp</label>
            <BandCampPlayer url={bandCampUrl}/>
        </Card>
    );
};
const Podcasts = () => {
    return (
        <div>
            <InfoText>
                <GradientText>Podcasts</GradientText>
            </InfoText>
            <GlassCardContainer>
                {PODCASTS_URLS.map((url, index) => (
                    <GlassCard key={index}>
                        <ReactPlayer url={url} width={"100%"} height={"100%"} />
                    </GlassCard>
                ))}
            </GlassCardContainer>
        </div>
    );
};


const Perfiles = () => {
    return (
        <div>
            <InfoText>
                <GradientText>¿Quienes somos?</GradientText>
            </InfoText>
            <GlassCardContainer>
                {PERFILES_RDK.map((perfil, index) => (
                        <UserCard
                            email={perfil.email}
                            bandCampUrl={perfil.bandCampUrl}
                            name={perfil.nombre}
                            imageSrc={perfil.imagen}
                            description={perfil.descripcion}
                            soundCloudUrl={perfil.soundCloudUrl}
                            instagramUrl={perfil.instagramUrl}
                        />
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
                        <p style={{color:"white", textAlign: "center", overflowY: "scroll"}}>
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
                <Perfiles/>
            </motion.div>
            <Footer/>
        </Container>
    );
};

export default ArtistLandingPage;
