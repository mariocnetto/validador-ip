const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const IPS_AUTORIZADOS = [
  '177.43.148.75',  // Substitua pelo IP real
  '162.120.185.212',
  '162.120.185.212',  // Apollo
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
