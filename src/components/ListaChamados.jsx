import { Container, Table, Badge } from 'react-bootstrap';

export default function ListaChamados({ chamados, loading }) {
  if (loading) {
    return <Container className="mt-4"><p>Carregando chamados...</p></Container>;
  }

  const getBadgeVariant = (prioridade) => {
    if (prioridade === 'Alta') return 'danger';
    if (prioridade === 'Média') return 'warning';
    if (prioridade === 'Baixa') return 'success';
    return 'secondary';
  };

  return (
    <Container className="mt-4">
      <h2>Chamados Abertos</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Solicitante</th>
            <th>Setor</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Prioridade</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>{chamado.solicitante}</td>
              <td>{chamado.setor}</td>
              <td>{chamado.tipo}</td>
              <td>{chamado.descricao}</td>
              <td>
                <Badge bg={getBadgeVariant(chamado.prioridade)}>
                  {chamado.prioridade}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}