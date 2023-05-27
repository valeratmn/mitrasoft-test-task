import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutMe = () => {
  return (
    <>
      <Helmet>
        <meta name="desription" content="About Me" />
        <title>About Me</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <Card.Body>
            <Card.Title className="mb-4">Соболь Валерий, 26 лет.</Card.Title>

            <Card.Subtitle className="mb-2">Навыки:</Card.Subtitle>
            <ListGroup variant="flush" className=" mb-5">
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>TypeScript</ListGroup.Item>
              <ListGroup.Item>React.js</ListGroup.Item>
              <ListGroup.Item>Redux-Toolkit / Redux-Saga</ListGroup.Item>
              <ListGroup.Item>React-Bootstrap 5</ListGroup.Item>
            </ListGroup>
            <Card.Subtitle className="mb-2">Опыт работы:</Card.Subtitle>
            <ListGroup variant="flush" className=" mb-3">
              <ListGroup.Item>
                <b>РЖД. </b>Электромеханик путей сообщения
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Новатэк. </b>Оператор установки подготовки нефти
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Строительный Двор</b> Frontend-разработчик. (React.js)
              </ListGroup.Item>
            </ListGroup>
            <Card.Subtitle className="mb-2">Образование:</Card.Subtitle>
            <ListGroup variant="flush" className=" mb-5">
              <ListGroup.Item>
                <b>Ковровский Транспортный Колледж. </b>Автоматика и
                телемеханика на траспорте
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Тюменский Индустриальный Университет. </b>Институт Геологии и
                Нефтегазодобычи
              </ListGroup.Item>
            </ListGroup>
            <Card.Subtitle className="mb-2">Курсы:</Card.Subtitle>
            <ListGroup variant="flush" className=" mb-3">
              <ListGroup.Item>
                <b>Udemy. </b> JavaScript
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Udemy. </b> React.js + Redux
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </motion.div>
    </>
  );
};

export default AboutMe;
