const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const IPS_AUTORIZADOS = [
  '3FF43366-CE56-59B7-55AC-3C7C3F3BF362',  // uuid king
  '',  // Meu IP
  '4FE9D880-A6A3-D0F8-1BAB-9C5C8E7064FD',  // camara
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
