class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.float :abv, null: false
      t.float :ibv, null: false
      t.integer :brewery_id, null: false
      t.timestamps
    end
    add_index :beers, :brewery_id, unique: true
  end
end
