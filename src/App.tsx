import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {getChartGantData} from "./actions/actionChartGant";
import ChartGant from "./components/ChartGant";

function App() {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(state => state.appSlice)

  useEffect(() => {
    dispatch(getChartGantData())
  }, [])

  return (
    isLoading ? <h1>Загрузка...</h1> : <ChartGant/>
  );
}

export default App;
