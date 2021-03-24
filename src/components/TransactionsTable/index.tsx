import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">$12,000</td>
            <td>Web Development</td>
            <td>03/17/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- $1,100</td>
            <td>Housing</td>
            <td>03/17/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
