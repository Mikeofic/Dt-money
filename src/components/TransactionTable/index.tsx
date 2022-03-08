import { Container } from "./styled";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit" >R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>08/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw" >R$ 1.500,00</td>
                        <td>Casa</td>
                        <td>01/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}