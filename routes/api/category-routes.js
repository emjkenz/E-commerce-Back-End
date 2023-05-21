const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: {
      model: Product
    }
  });
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const products = await Product.findAll({
    where: {
      category_id: req.params.id
    }
  });
  res.json(products);
});

router.post('/', async (req, res) => {
  // create a new category
  const create = Object.keys(req.body).length > 0 ? req.body : req.query;

  // If id is provided, check if it exists
  if (create.id) {
    const cat = await Category.findOne({
      where: {
        id: create.id
      }
    });

    if (cat) {
      res.json({ status: "error", message: "Category already exists" });
      return;
    }
  }

  Category.create(create);
  res.json({ status: "success" });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const update = Object.keys(req.body).length > 0 ? req.body : req.query;

  if (update.id) {
    res.json({ status: "error", message: "Cannot update id" });
    return;
  }

  Category.update(update, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({ status: 'success' });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({status:'success'});
});

module.exports = router;
