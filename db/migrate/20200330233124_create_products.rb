class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.float :price
      t.boolean :has_size
      t.text :sizes
      t.string :category
      t.text :main_image
      t.text :alt_image

      t.timestamps
    end
  end
end
