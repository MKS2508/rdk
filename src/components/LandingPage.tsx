import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import foto1 from "../assets/foto2.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto2.jpg";
import ReactPlayer from "react-player"
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GradientText = styled.span`
  font-size: 40px;
  background: #2d2a2a; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2d2a2a, #9932cc); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2d2a2a, #9932cc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  color: transparent;
`;


const ParallaxCarousel = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const CarouselImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 300px;
  margin: 10px;
`;

const GlassCardContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const InfoText = styled(motion.p)`
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  background-color: rgba(255, 248, 248, 0.44);
`;

const CarouselImageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



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
            setCurrentImage((currentImage + 1) % 3);
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentImage]);

    const images = [foto1, foto2, foto3];

    return (
        <Container>
            <ParallaxCarousel>
                {images.map((image, index) => (
                    <CarouselImageContainer key={index} style={{ display: currentImage === index ? 'block' : 'none' }}>
                        <CarouselImage src={image} alt={`Image ${index + 1}`} />
                    </CarouselImageContainer>
                ))}
            </ParallaxCarousel>
            <motion.div ref={ref} animate={controls}>
                <div>
                    <InfoText><GradientText>Podcasts</GradientText></InfoText>
                    <GlassCardContainer>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk-podcast-005-psdek"
                            />
                        </GlassCard>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk-podcast-006-mutter"
                            />
                        </GlassCard>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk_christmas_sessions_001"
                            />
                        </GlassCard>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk-podcast-004-dj-haze"
                            />
                        </GlassCard>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk-pocast-003-hermetica"
                            />
                        </GlassCard>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk-sessions-004-no-monk3y-mareission-1"
                            />
                        </GlassCard>
                        <GlassCard>
                            <ReactPlayer
                                url="https://soundcloud.com/radek-raver/rdk-sessions-003-f-draxis-drabassion-1"
                            />
                        </GlassCard>
                    </GlassCardContainer>
                </div>
                <div>
                    <InfoText><GradientText>Redes sociales</GradientText></InfoText>
                    <GlassCardContainer>
                        <GlassCard>
                            <IframeContainer>
                                <iframe src="https://www.instagram.com/embed.js" width="340" height="154" scrolling="no"></iframe>
                            </IframeContainer>
                        </GlassCard>
                    </GlassCardContainer>
                </div>
            </motion.div>
        </Container>
    );
};

export default ArtistLandingPage;
