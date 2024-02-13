import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://backend-225p.onrender.com';

// Додавання запису по спожитій воді
export const addWaterEntry = createAsyncThunk(
  'tracker/addWaterEntry',
  async (saveWater, thunkAPI) => {
    try {
      const res = await axios.post('/api/water/add', saveWater);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Редагування запису по спожитій воді
export const updateWaterEntry = createAsyncThunk(
  'tracker/updateWaterEntry',
  async (waterData, thunkAPI) => {
    try {
      const res = await axios.put(`/api/water/update/${waterData.waterId}`, {
        amountWater: waterData.amountWater,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалення запису по спожитій воді
export const deleteWaterEntry = createAsyncThunk(
  'tracker/deleteWaterEntry',
  async (waterId, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/water/${waterId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання інформації про кількість води щоденно
export const getDailyWaterAmount = createAsyncThunk(
  'tracker/getDailyWaterAmount',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/water/today');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання інформації про кількість води за місяць
export const getMonthWaterAmount = createAsyncThunk(
  'tracker/getMonthWaterAmount',
  async (date, thunkAPI) => {
    try {
      const res = await axios.get(`/api/water/month/${date}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
