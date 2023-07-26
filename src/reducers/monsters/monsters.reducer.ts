import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setSelectedMonster, setSelectedRandomMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedRandomMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedRandomMonster: null
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedRandomMonster, (state, action) => ({
    ...state,
    selectedRandomMonster: action.payload,
  }));
});
