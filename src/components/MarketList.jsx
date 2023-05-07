import MarketProduct from "./MarketProduct";
import { useSelector } from "react-redux";

const MarketList = () => {
  const products = useSelector((state) => state.market);

  return (
    <>
      {!!products.length ? (
        <ul className="market-list">
          {products.map((product) => {
            const { id } = product;
            return <MarketProduct key={id} id={id} />;
          })}
        </ul>
      ) : null}
    </>
  );
};

export default MarketList;
