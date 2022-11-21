import React from 'react';
import {useAppSelector} from "../hooks/redux";

const ChartGant = () => {
  const { chartGant, error } = useAppSelector(state => state.appSlice)

  console.log(chartGant)

  return (
    <div>
      {error !== ""
        ? error :
        <div>
          erherherhreh
        </div>
      }
    </div>
  );
};

export default ChartGant;
