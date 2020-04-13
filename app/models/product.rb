# frozen_string_literal: true

class Product < ApplicationRecord
  serialize :sizes, Hash
  serialize :alt_image, Array
  belongs_to :category

  has_many :purchase_products
  has_many :purchase_records, through: :purchase_products

  def self.get_all_featured
    Product.find_by_sql(
      "SELECT * FROM products WHERE featured=true"
    )
  end
end
