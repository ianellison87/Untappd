class ChangeBrewedByTypeToString < ActiveRecord::Migration[5.2]
  def up
    change_column :beers, :brewed_by, :string
  end

  def down
    change_column :beers, :brewed_by, :integer
  end

end
