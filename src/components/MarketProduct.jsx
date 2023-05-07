import { useSelector } from "react-redux";
import PropsTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const MarketProduct = ({ id }) => {
  const products = useSelector((state) => state.market);
  const product = products.find((product) => product.id === id);
  const { name, price, description, image, count } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography
          className="market__name"
          gutterBottom
          variant="h6"
          component="div"
        >
          {price} p.
        </Typography>
        <Typography
          className="market__name"
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          className="market__desc"
          variant="body2"
          color="text.secondary"
        >
          {description.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions className="market__actions">
        <Button size="small">В корзину</Button>
        <Typography
          className="market__name"
          gutterBottom
        >
          Осталось: {count}
        </Typography>
      </CardActions>
    </Card>
  );
};

MarketProduct.propTypes = {
  id: PropsTypes.string.isRequired,
};

export default MarketProduct;
