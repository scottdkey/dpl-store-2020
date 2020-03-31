# frozen_string_literal: true

class AddTrackableToAdmins < ActiveRecord::Migration[6.0]
  def change
    def change
      ## Trackable
      add_column :admins, :sign_in_count, :integer, default: 0
      add_column :admins, :current_sign_in_at, :datetime
      add_column :admins, :last_sign_in_at, :datetime
      add_column :admins, :current_sign_in_ip, :string
      add_column :admins, :last_sign_in_ip, :string
  end
  end
end
