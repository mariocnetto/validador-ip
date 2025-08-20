const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const IPS_AUTORIZADOS = [
  '',  // meu ip descartavel
  '',  // Meu IP
  '96da4960d916f77c4c7b9546f39843c61702bf30e7a392e29de77f9665c60c2a',  // camara
  '',  // meu ip descartavel2
];

app.get('/ips_autorizados', (req, res) => {
  res.json({ ips: IPS_AUTORIZADOS });
});

app.get('/', (req, res) => {
  res.send('🟢 Servidor de IP autorizado está funcionando.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
