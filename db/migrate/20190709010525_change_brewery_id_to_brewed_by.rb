class ChangeBreweryIdToBrewedBy < ActiveRecord::Migration[5.2]
  def change
    rename_column :beers, :brewery_id, :brewed_by
  end
end
