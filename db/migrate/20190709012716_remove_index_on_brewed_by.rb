class RemoveIndexOnBrewedBy < ActiveRecord::Migration[5.2]
  def change
    remove_index :beers, name: "index_beers_on_brewed_by", unique: true
  end
end
