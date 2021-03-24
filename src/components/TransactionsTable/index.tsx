import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
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
