import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IChartGant} from "../../models/IChartGant";

interface AppState {
  chartGant: IChartGant | null;
  isLoading: boolean;
  error: string;
}

const initialState: AppState = {
  chartGant: null,
  isLoading: false,
  error: "",
}

export const appSlice = createSlice({
  name: 'chartGant',
  initialState,
  reducers: {
    fetchChartGant(state) {
      state.isLoading = true;
    },
    fetchChartGantSuccess(state, action: PayloadAction<IChartGant>) {
      state.isLoading = false;
      state.chartGant = action.payload;
      state.error = "";
    },
    fetchChartGantError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default appSlice.reducer;
