const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const IPS_AUTORIZADOS = [
  '104.28.193.83',  // meu ip descartavel
  '177.158.146.156',  // Meu IP
  '152.248.41.159',  // Apollo
  '104.28.193.83',  // meu ip descartavel2
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
