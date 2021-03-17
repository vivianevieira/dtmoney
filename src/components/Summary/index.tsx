import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Incominng" />
        </header>
        <strong>$1,000.00</strong>
      </div>
      <div>
        <header>
          <p>Outgoing</p>
          <img src={outcomeImg} alt="Outcoming" />
        </header>
        <strong>- $500.00</strong>
      </div>
      <div className="highlighted-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500.00</strong>
      </div>
    </Container>
  );
}
