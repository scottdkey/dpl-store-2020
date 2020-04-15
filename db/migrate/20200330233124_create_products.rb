# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.float :price
      t.boolean :has_size
      t.text :sizes
      t.text :main_image
      t.text :alt_image
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
