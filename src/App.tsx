import Header from "./components/Header";
import "./App.css";
import HeaderWidthContent from "./components/HeaderWidthContent";
import Container from "./components/Container";
import TextWithNumber from "./components/TextWithNumber";
import List from "./components/List";

//Conventional Props -> Header and HeaderWidthContent

//Default Props -> Container

//Bad Practice -> HeaderFC using React.FC

//Functional Props -> TextWithNumber

//List

function App() {
  return (
    <>
      <Header title="Hello World" />
      <HeaderWidthContent>
        <strong>Hi</strong>
      </HeaderWidthContent>
      <Container>Hello Container</Container>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's Number is : {num}</div>}
      </TextWithNumber>
      <List
        items={["Jack", "Sadie", "Oso"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
    </>
  );
}

export default App;
