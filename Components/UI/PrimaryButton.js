import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  const { width, height } = useWindowDimensions();

  let content = (
    <>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContainer, style.pressed]
            : style.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </>
  );

  if (width > 400 && height > 900) {
    content = (
      <>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [style.buttonInnerContainerWideW, style.pressed]
              : style.buttonInnerContainerWide
          }
          onPress={onPress}
          android_ripple={{ color: Colors.primary600 }}
        >
          <Text style={style.buttonText}>{children}</Text>
        </Pressable>
      </>
    );
  }
  return <View style={style.buttonOuterContainer}>{content}</View>;
}

export default PrimaryButton;

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonInnerContainerWide: {
    width: 120,
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
