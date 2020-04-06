# frozen_string_literal: true

class Product < ApplicationRecord
  serialize :sizes, Hash
  serialize :alt_image, Array
  belongs_to :category

  has_many :purchase_products
  has_many :purchase_records, through: :purchase_products
end
