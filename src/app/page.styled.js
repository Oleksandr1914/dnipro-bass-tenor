import { device, size } from "@/utils/mixins";
import styled from "styled-components";
import Inst from "../assets/Instagram.png";

export const Background = styled.main`
  background-image: url(${Inst.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export const Container = styled.div`
  width: ${size.mobile};
  min-height: 100vh;
  margin: 0 auto;
  padding: 18px 18px;
  padding-bottom: 210px;

  ${device.tablet} {
    width: ${size.tablet};
    padding: 40px;
    background-position: bottom;
  }
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 12px;
  text-shadow: -0 -1px 0 #ffffff, 0 -1px 0 #ffffff, -0 1px 0 #ffffff,
    0 1px 0 #ffffff, -1px -0 0 #ffffff, 1px -0 0 #ffffff, -1px 0 0 #ffffff,
    1px 0 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
`;

export const Text1 = styled.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  text-align: justify;
  margin-bottom: 6px;
  text-shadow: -0 -1px 0 #ffffff, 0 -1px 0 #ffffff, -0 1px 0 #ffffff,
    0 1px 0 #ffffff, -1px -0 0 #ffffff, 1px -0 0 #ffffff, -1px 0 0 #ffffff,
    1px 0 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
  b {
    text-shadow: 0 0px 0 #ffffff;
  }
`;

export const Title2 = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
  text-shadow: -0 -1px 0 #ffffff, 0 -1px 0 #ffffff, -0 1px 0 #ffffff,
    0 1px 0 #ffffff, -1px -0 0 #ffffff, 1px -0 0 #ffffff, -1px 0 0 #ffffff,
    1px 0 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
  b {
    text-shadow: 0 0px 0 #ffffff;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Item = styled.li`
  display: flex;
  align-items: top;
  gap: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  text-shadow: -0 -1px 0 #ffffff, 0 -1px 0 #ffffff, -0 1px 0 #ffffff,
    0 1px 0 #ffffff, -1px -0 0 #ffffff, 1px -0 0 #ffffff, -1px 0 0 #ffffff,
    1px 0 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
`;

export const Link = styled.a`
  color: rgb(17, 11, 135);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: underline;
  margin-bottom: 8px;
  text-shadow: -0 -1px 0 #ffffff, 0 -1px 0 #ffffff, -0 1px 0 #ffffff,
    0 1px 0 #ffffff, -1px -0 0 #ffffff, 1px -0 0 #ffffff, -1px 0 0 #ffffff,
    1px 0 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
  b {
    color: rgb(208, 237, 255);
    text-shadow: 0 0px 0 #ffffff;
  }
`;

export const Title3 = styled.h2`
  margin-top: 16px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 8px;
  text-shadow: -0 -1px 0 #ffffff, 0 -1px 0 #ffffff, -0 1px 0 #ffffff,
    0 1px 0 #ffffff, -1px -0 0 #ffffff, 1px -0 0 #ffffff, -1px 0 0 #ffffff,
    1px 0 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
  b {
    color: rgb(27, 25, 25);
  }
`;
