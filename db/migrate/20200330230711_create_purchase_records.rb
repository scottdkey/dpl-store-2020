# frozen_string_literal: true

class CreatePurchaseRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :purchase_records do |t|
      t.float :order_total
      t.string :email_address
      t.string :first_name
      t.string :last_name
      t.string :address_one
      t.string :address_two
      t.string :city
      t.string :state
      t.integer :zip_code
      t.boolean :fufilled

      t.timestamps
    end
  end
end
