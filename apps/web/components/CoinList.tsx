import React from "react";
import Image from "next/image";
import { Card, Spacer } from "ui";
import { useCoinStats } from "data-hooks";
import styles from "../styles/index.module.css";

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Coin price</h1>
        {children}
      </div>
    </div>
  );
};

const CoinList = () => {
  const { data, isLoading, isError } = useCoinStats();

  if (isLoading) {
    return (
      <ListLayout>
        <p>Loading 🎭</p>
      </ListLayout>
    );ListLayout
  }

  if (isError) {
    return (
      <ListLayout>
        <p>An error occurred 🤕</p>
      </ListLayout>
    );
  }

  return (
    <ListLayout>
      {data.map((coin) => {
        return (
          <React.Fragment key={coin.id}>
            <Card>
              <Image
                src={coin.icon}
                alt={`${coin.name} icon`}
                width={20}
                height={20}
              />
              <Spacer size="m" />
              <span>
                {coin.name} <span style={{ color: "gray" }}>{coin.symbol}</span>
              </span>
              <Spacer size="s" />
              <span>${coin.price.toFixed(2)}</span>
            </Card>
            <Spacer />
          </React.Fragment>
        );
      })}
    </ListLayout>
  );
};

export default CoinList;
