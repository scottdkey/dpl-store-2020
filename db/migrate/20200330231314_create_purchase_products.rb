class CreatePurchaseProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :purchase_products do |t|
      t.integer :quantity
      t.string :size_choice
      t.belongs_to :Purchase_Record, null: false, foreign_key: true
      t.belongs_to :Product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
