import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={style.card}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth > 380 ? 300 : 200,
    marginTop: deviceWidth < 300 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
