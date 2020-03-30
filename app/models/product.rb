class Product < ApplicationRecord
  serialize :sizes, Hash
  serialize :alt_image, Array

  has_many: purchase_products
end
