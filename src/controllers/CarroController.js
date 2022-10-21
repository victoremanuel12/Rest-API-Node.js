const carroService = require('../services/CarroServices')

module.exports = {
   buscarTodos: async (req, res) => {
      let json = { error: '', results: [] }
      let carros = await carroService.buscarTodos()
      for (let i in carros) {
         json.results.push({
            codigo: carros[i],
            descricao: carros[i].modelo
         })
      }
      res.json(json)
   },
   buscarUm: async (req, res) => {
      let json = { error: '', result: {} }
      let codigo = req.params.codigo;
      let carro = await carroService.buscarUm(codigo)

      if (carro) {
         json.result = carro
      }
      res.json(json)
   },
   inserirCarro: async (req, res) => {
      let json = { error: '', result: {} }
      let modelo = req.body.modelo;
      let placa = req.body.placa;

      if (modelo && placa) {
         let carroCodigo = await carroService.inserirCarro(modelo, placa)

         json.result = {
            codigo: carroCodigo,
            modelo,
            placa
         }
      } else {
         json.error = 'Campos não preenchidos corretamente, então nao foram enviados'
      }
      res.json(json)

   },
   alterarCarro: async (req, res) => {
      let json = { error: '', result: {} }
      let codigo = req.params.codigo;
      let modelo = req.body.modelo;
      let placa = req.body.placa;

      if (modelo && placa) {
         await carroService.alterarCarro(codigo, modelo, placa)

         json.result = {
            codigo,
            modelo,
            placa
         }
      } else {
         json.error = 'Campos não preenchidos corretamente, então não foram enviados'
      }
      res.json(json)

   },
   excluirCarro: async (req, res) => {
      let json = { error: '', result: {} }
      await carroService.excluirCarro(req.params.codigo)
      res.json(json)

   },
}