import { nanoid } from "nanoid";
import { ADD_PRODUCT } from "../actions/actionTypes";
const initialState = [
  {
    id: nanoid(),
    name: "Умная колонка Яндекс Станция Макс с Алисой, с Zigbee, черный, 65Вт",
    price: 29990,
    description:
      "Умная колонка Яндекс Станция Макс с голосовым помощником Алисой, мощностью звучания 65 Вт, встроенным хабом управления Zigbee, беспроводной связью Wi-Fi (2.4 – 5 ГГц) и Bluetooth 4.2 и возможностью встраивания в экосистему Умного Дома от официального поставщика с гарантией от производителя. Яндекс Станция Макс — самая мощная модель умных колонок от отечественного IT-гиганта.",
    image: "https://i.pravatar.cc/300",
    count: 4,
  },
];

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { name, price, description } = action.payload;
      return [
        ...state,
        {
          id: nanoid(),
          image: "https://i.pravatar.cc/300",
          name,
          price: Number(price),
          description,
        },
      ];
    }
    default: {
      return state;
    }
  }
};

export default serviceReducer;
