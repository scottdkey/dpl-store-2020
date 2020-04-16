class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :type
      t.string :url
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
