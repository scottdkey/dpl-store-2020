# frozen_string_literal: true

class PurchaseRecord < ApplicationRecord
  has_many :purchase_products
  has_many :products, through: :purchase_products
end
