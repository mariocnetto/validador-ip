const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const IPS_AUTORIZADOS = [
  '3FF43366-CE56-59B7-55AC-3C7C3F3BF362',  // meu pc
  '76451D00-FE8D-11D5-9974-2CFDA1C85962',  // meu servidor
  '4FE9D880-A6A3-D0F8-1BAB-9C5C8E7064FD',  // camara
  '415E9D17-69AB-8F47-B3BE-706979A3A8B1',  // camara notebook
  '3432263F-2901-1635-6D56-A85E45B11232',  // 4k
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
