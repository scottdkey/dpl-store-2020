class PurchaseProduct < ApplicationRecord
  belongs_to :purchase_records
  belongs_to :products
end
