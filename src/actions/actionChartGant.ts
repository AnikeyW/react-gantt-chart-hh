import axios from "axios";
import { AppDispatch } from "../store";
import {appSlice} from "../store/redusers/appSlice";
import {IChartGant} from "../models/IChartGant";

export const getChartGantData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(appSlice.actions.fetchChartGant())
    const response = await axios.get<IChartGant>('http://82.202.204.94/tmp/test.php')
    dispatch(appSlice.actions.fetchChartGantSuccess(response.data))
  } catch (error) {
    console.error(error);
    dispatch(appSlice.actions.fetchChartGantError("Не удалось загрузить данные графика"))
  }
}
