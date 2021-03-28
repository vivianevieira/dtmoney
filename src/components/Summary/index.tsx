import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  console.log(transactions);



  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Incominng" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expense</p>
          <img src={outcomeImg} alt="Outcoming" />
        </header>
        <strong>-
          {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlighted-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
          }).format(summary.total)}
          </strong>
      </div>
    </Container>
  );
}
