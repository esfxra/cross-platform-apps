import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  EmitterSubscription,
} from "react-native";
import { useCoinStats } from "data-hooks";
import { Card, Spacer } from "ui";

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  const dimensionsListener = useRef<EmitterSubscription>(null);
  const [uiWidth, setUiWidth] = useState(Dimensions.get("window").width);
  const width = uiWidth > 700 ? 680 : "100%";

  // Effect for listening to UI dimension changes (probably a fair candidate for global state)
  useLayoutEffect(() => {
    dimensionsListener.current = Dimensions.addEventListener(
      "change",
      ({ window }) => {
        setUiWidth(window.width);
      }
    );

    return () => {
      dimensionsListener.current?.remove();
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ padding: 15, width, alignSelf: "center" }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 36 }}>Coin stats</Text>
      <Spacer />
      {children}
    </ScrollView>
  );
};

const CoinList = () => {
  const { data, isLoading, isError } = useCoinStats();

  if (isLoading) {
    return (
      <ListLayout>
        <Text>Loading 🎭</Text>
      </ListLayout>
    );
  }

  if (isError) {
    return (
      <ListLayout>
        <Text>An error occurred 🤕</Text>
      </ListLayout>
    );
  }

  return (
    <ListLayout>
      {data &&
        data.map((coin) => {
          return (
            <React.Fragment key={coin.id}>
              <Card style={{ width: "100%" }}>
                <Image
                  source={{ uri: coin.icon }}
                  accessibilityLabel={`${coin.name} icon`}
                  style={{ width: 20, height: 20 }}
                />
                <Spacer size="m" />
                <Text>
                  {coin.name}{" "}
                  <Text style={{ color: "gray" }}>{coin.symbol}</Text>
                </Text>
                <Spacer size="s" />
                <Text>${coin.price.toFixed(2)}</Text>
              </Card>
              <Spacer />
            </React.Fragment>
          );
        })}
    </ListLayout>
  );
};

export default CoinList;
