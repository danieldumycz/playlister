class AddClientSecretToIdentities < ActiveRecord::Migration
  def change
    add_column :identities, :client_secret, :string
  end
end
