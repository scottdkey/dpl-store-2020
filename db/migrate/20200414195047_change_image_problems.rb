class ChangeImageProblems < ActiveRecord::Migration[6.0]
  def change
    remove_column :images, :type
  end
end
