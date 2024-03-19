import { loremIpsum } from "lorem-ipsum";
import ListItem from "./components/ListItem";

function App() {
  const totalItem = 5000;

  const list = Array(totalItem)
    .fill()
    .map((value, id) => {
      return {
        id,
        title: "Md Fayezullah",
        description: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 5,
          sentenceUpperBound: 10,
        }),
        image: "https://via.placeholder.com/50",
      };
    });
  console.log(list);

  return (
    <div className="p-5">
      {list.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
