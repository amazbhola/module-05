import { loremIpsum } from "lorem-ipsum";
import { List } from "react-virtualized";
import ListItem from "./components/ListItem";

function App() {
  const totalItem = 5000;
  const rowWidth = 900;
  const rowHeight = 50;
  const listHeight = 900;

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
  const renderarFun = ({ index, key, style }) => {
    const item = list[index];
    return <ListItem {...item} key={key} style={style} />;
  };

  return (
    <div className="p-5">
      <div className="p-2 shadow rounded h-screen ">
        <List
          height={listHeight}
          width={rowWidth}
          rowHeight={rowHeight}
          rowCount={totalItem}
          rowRenderer={renderarFun}
          overscanRowCount={5}
        />
      </div>
    </div>
  );
}

export default App;
