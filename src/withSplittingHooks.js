import React, { useState, useEffect } from "react";

const withSplittingHooks = (getComponent) => {
  // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되야합니다.
  const WithSplitting = () => {
    const [{ Splitted2 }, setState] = useState({
      Splitted2: null,
    });

    useEffect(() => {
      getComponent().then(({ default: Splitted }) => {
        setState({
          Splitted2: Splitted,
        });
      });
    }, []);

    if (!Splitted2) {
      return null;
    }

    return <Splitted2 />;
  };

  return WithSplitting;
};

export default withSplittingHooks;
