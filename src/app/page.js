"use client";

import styles from "./page.module.css";
import { GlobalStyle } from "../globalStyles";
import { Container, Title } from "./page.styled";
import { IoMusicalNotes } from "react-icons/io5";

export default function Home() {
  return (
    <Container className={styles.page}>
      <GlobalStyle />
      <Title>
        <IoMusicalNotes />
        <> Увага! Неймовірна можливість для тенорів і басів!</>
        <IoMusicalNotes />
      </Title>
    </Container>
  );
}
