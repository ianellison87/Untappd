class RenameIbvBeersColumnToIbu < ActiveRecord::Migration[5.2]
  def change
    rename_column :beers, :ibv, :ibu
  end
end
