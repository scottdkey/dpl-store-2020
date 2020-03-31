class CreatePurchaseProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :purchase_products do |t|
      t.integer :quantity
      t.string :size_choice
      t.belongs_to :purchase_records, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
