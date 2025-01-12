"use client";

import styles from "./page.module.css";
import { GlobalStyle } from "../globalStyles";
import {
  Background,
  Container,
  Title,
  Text1,
  Title2,
  List,
  Item,
  Link,
  Title3,
} from "./page.styled";
import { IoMusicalNotes } from "react-icons/io5";
import { IoIosMusicalNote } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  return (
    <Background>
      <Container className={styles.page}>
        <GlobalStyle />
        <Title>
          <IoMusicalNotes />
          <> Увага! Неймовірна можливість для тенорів і басів!</>
          <IoMusicalNotes />
        </Title>
        <Text1>
          Ти мрієш співати так, щоб від твого голосу тремтіли стіни? Твоє серце
          б'ється в такті музиці, а душа прагне сцени? Ми шукаємо саме тебе!
        </Text1>
        <Text1>
          {" "}
          <b>💥</b> Хор оголошує набір ТЕНОРІВ та БАСІВ на новий, незабутній
          сезон. Твій шанс бути частиною чогось грандіозного – емоції, виступи,
          дружнє ком'юніті творчих людей, яких об'єднує любов до музики! Щоб
          співати з нами не обовʼязково потрібно бути професійним музикантом,
          головне бажання!
        </Text1>
        <Title2>Бути учасником хору «Дніпро» це:</Title2>
        <List>
          <Item>
            <div>
              <IoIosMusicalNote />
            </div>
            <b>виступати на великих сценах;</b>
          </Item>
          <Item>
            <div>
              <IoIosMusicalNote />
            </div>
            <b>розвивати свій голос поруч з найкращими;</b>
          </Item>
          <Item>
            <div>
              <IoIosMusicalNote />
            </div>
            <b>опанувати хорове сольфеджіо;</b>
          </Item>
          <Item>
            <div>
              <IoIosMusicalNote />
            </div>
            <b>отримувати задоволення від ансамблевого звучання;</b>
          </Item>
          <Item>
            <div>
              <IoIosMusicalNote />
            </div>
            <b>знайти нових творчих друзів;</b>
          </Item>
          <Item>
            <div>
              <IoIosMusicalNote />
            </div>
            <b>поринути в неймовірну атмосферу хорової музики!</b>
          </Item>
        </List>
        <Title2>
          <b>🔥</b> Не зволікай!
        </Title2>
        <Link href="https://t.me/sofiia_septima">
          Записатися на прослуховування можна тут
          {/* <b>
             
            <FaTelegramPlane />
          </b> */}
        </Link>
        <Title3>Тенори і баси – ви нам потрібні!</Title3>
      </Container>
    </Background>
  );
}
