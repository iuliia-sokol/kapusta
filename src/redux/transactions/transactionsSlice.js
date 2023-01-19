import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionOp,
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  removeTransaction,
} from './transactionsOps';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    balance: 0,
    transactions: {
      expense: [],
      income: [],
      monthsStats: [],
    },
    isLoadinng: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(addTransactionOp.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(addTransactionOp.fulfilled, (state, { payload }) => {
        state.isLoadinng = false;
        state.balance = payload.data.newBalance;
        const newTransaction = payload.data.transaction;
        state.transactions[payload.type].push(newTransaction);
      })
      .addCase(addTransactionOp.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      })
      .addCase(fetchExpenseTransactions.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(fetchExpenseTransactions.fulfilled, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = null;
        state.transactions.monthsStats = payload.monthsStats;
        state.transactions.expense = payload.expenses;
      })
      .addCase(fetchExpenseTransactions.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      })
      .addCase(fetchIncomeTransactions.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(fetchIncomeTransactions.fulfilled, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = null;
        state.transactions.monthsStats = payload.monthsStats;
        state.transactions.income = payload.incomes;
      })
      .addCase(fetchIncomeTransactions.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      })
      .addCase(removeTransaction.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(removeTransaction.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoadinng: false,
          error: null,
          transactions: {
            ...state.transactions,
            expense: state.transactions.expense.filter(
              operation => operation._id !== payload
            ),
            income: state.transactions.income.filter(
              operation => operation._id !== payload
            ),
          },
        };
      })
      .addCase(removeTransaction.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      }),
});

export default transactionsSlice.reducer;
