import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
`;

export const GradientText = styled.span`
  font-size: 40px;
  background: rgba(255, 248, 248, 0.98); /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fff8f8, #9932cc); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fff8f8, #9932cc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ParallaxCarousel = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const CarouselImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

export const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 300px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GlassCardContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

export const InfoText = styled(motion.p)`
  color: #fff;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CarouselImageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

export const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled(motion.footer)`
  border-radius: 10px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2d2a2a;
  padding: 40px 0;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
`;

export const FooterText = styled(motion.p)`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SocialMediaContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialMediaIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 10px;
  margin: 0 5px;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

