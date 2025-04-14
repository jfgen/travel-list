import Item from "./Item";

const PackingList = ({ list }) => {
  console.log(list);
  return (
    <div className="list">
      <ul>
        {list.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;
