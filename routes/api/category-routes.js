const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product
    }
  }).then((categories) => {
    res.json(categories);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Product.findAll({
    where: {
      category_id: req.params.id
    }
  }).then((products) => {
    res.json(products);
  });
});

router.post('/', (req, res) => {
  // create a new category
  const create = Object.keys(req.body).length > 0 ? req.body : req.query;

  if (!create.category_name) {
    // Return error if category already exists
    res.json({ status: "error", message: "Category name is required" });
    return;
  }

  // If id is provided, check if it exists
  if (create.id) {
    Category.findOne({
      where: {
        id: create.id
      }
    }).then((cat) => {
      if (cat) {
        // Return error if category already exists
        res.json({ status: "error", message: "Category already exists" });
        return;
      }
    });
  }
  else {
    // If no error occurs then create category
    Category.create(create);
    res.json({ status: "success" });
  }
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
