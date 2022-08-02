const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./database/models/index');

app.use(express.json());

app.get('/home', (_, res) => {
  res.send('Hello world')
})

//create
app.post('/products', async (req, res) => {
  const data = req.body;
  try {
    const Product = await db.Product.create({
      name: data.name,
      description: data.description,
      product_type: data.product_type,
      preco: data.preco
    })

    res.send('registro criado')
  } catch (e) {
    res.send('Deu algum BO na criacao')
  }
})

//read
app.get('/products', async (_, res) => {
  try {
    const products = await db.Product.findAll();
    return res.send(products)
  } catch (error) {
    res.send('Deu algum BO na busca')
  }
})

app.get('/products/types', async (_, res) => {
  try {
    const productTypes = await db.ProductType.findAll();
    return res.send(productTypes)
  } catch (error) {
    res.render('Deu algum BO na busca', error.message)
  }
})

//update
app.put('/products/update/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const atualizar = await db.Product.update(
      {
        name: data.name,
        description: data.description,
        product_type: data.product_type,
        preco: data.preco
      },
      {
        where: {
          id
        }
      })

    res.send('registro atualizado')
  } catch (e) {
    res.send('Deu algum BO na atualizacao')
  }
})

//delete
app.delete('/products/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletar = await db.Product.destroy({
      where: {
        id
      }
    })

    res.send('registro deletado')
  } catch (e) {
    res.send('Deu algum BO na criacao')
  }
})



app.listen(PORT, () => { console.log('Server is runnig on port: ', PORT) })