import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

export default function FormChamado({ onAdicionarChamado, onMudarPagina }) {
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    solicitante: '',
    setor: '',
    tipo: '',
    descricao: '',
    prioridade: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    fetch('http://localhost:3000/chamados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((novoChamado) => {
        onAdicionarChamado(novoChamado);
        setFormData({ solicitante: '', setor: '', tipo: '', descricao: '', prioridade: '' });
        setEnviando(false);
        onMudarPagina('lista');
      });
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Abrir Novo Chamado</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Solicitante</Form.Label>
              <Form.Control type="text" name="solicitante" minLength={3} value={formData.solicitante} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Setor</Form.Label>
              <Form.Select name="setor" value={formData.setor} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="TI">TI</option>
                <option value="RH">RH</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Operações">Operações</option>
                <option value="Comercial">Comercial</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo de Problema</Form.Label>
              <Form.Select name="tipo" value={formData.tipo} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                <option value="Rede">Rede</option>
                <option value="Acesso">Acesso</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrição do Problema</Form.Label>
              <Form.Control as="textarea" name="descricao" minLength={10} value={formData.descricao} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prioridade</Form.Label>
              <Form.Select name="prioridade" value={formData.prioridade} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Salvar Chamado'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}