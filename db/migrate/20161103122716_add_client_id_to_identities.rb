class AddClientIdToIdentities < ActiveRecord::Migration
  def change
    add_column :identities, :client_id, :string
  end
end
