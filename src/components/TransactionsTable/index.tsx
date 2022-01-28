import { Container } from '../TransactionsTable/styles';

export function TransactionsTable(){
    return(
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Desenvolvimento de website</td>
                    <td className="deposit">R$12.000,00</td>
                    <td>Trabalho</td>
                    <td>28/01/2022</td>  
                </tr>

                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw">- R$2.000,00</td>
                    <td>Finanças pessoais</td>
                    <td>08/01/2022</td>  
                </tr>
            </tbody>
        </table>
    </Container>
    ); 
}
