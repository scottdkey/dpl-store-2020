# frozen_string_literal: true

class PurchaseProduct < ApplicationRecord
  belongs_to :purchase_record
  belongs_to :product
end
