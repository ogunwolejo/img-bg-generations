import React, {useMemo} from "react";
import {StyleSheet, View} from "react-native";
import {Dash} from "@/components/ui/dash.tsx";
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";

type Props = {
    activeColor: string;
    inActiveColor?: string;
    totalIndicator: number;
    indicatorLength: number;
    current: number;
    height?: number;
}
export const ScreenIndicator = ({totalIndicator, indicatorLength, current, activeColor, inActiveColor, height}: Props): React.JSX.Element => {
    const colorScheme = useColorScheme();
    const whiteColor = useMemo(() => Colors[colorScheme]["white"], [colorScheme])
    return (
      <View style={styles.container}>
          {
              Array.from({length: totalIndicator}).map((_, idx: number) => {
                  const color: string = idx === (current - 1) ? activeColor : (inActiveColor ?? whiteColor);
                  return (
                      <Dash key={idx} bg={color} length={indicatorLength} height={height}/>
                    );
                  }
              )
          }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        width: "80%",
    },
});
