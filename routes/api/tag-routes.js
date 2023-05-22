const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: {
      model: Product
    }
  });
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags = await Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  });
  res.json(tags);
});

router.post('/', (req, res) => {
  // create a new tag
  const create = Object.keys(req.body).length > 0 ? req.body : req.query;

  Tag.create(create)
    .then((tag) => {
      res.json(tag);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const updated = Object.keys(req.body).length > 0 ? req.body : req.query;

  Tag.update(updated, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({ status: 'success' });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({ status: 'success' });
});

module.exports = router;
