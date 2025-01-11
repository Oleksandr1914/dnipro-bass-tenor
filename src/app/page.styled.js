import { device, size } from "@/utils/mixins";
import styled from "styled-components";
import Inst from "../assets/Instagram.png";

export const Container = styled.main`
  width: ${size.mobile};
  min-height: 100vh;
  margin: 0 auto;
  padding: 42px 24px;
  background-image: url(${Inst.src});
  background-repeat: no-repeat;
  background-size: cover;

  ${device.tablet} {
    width: ${size.tablet};
    padding: 40px;
    background-position: bottom;
    background-size: 100%;
  }
  ${device.desktop} {
    width: ${size.desktop};
    padding: 60px 0;
  }
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`;
