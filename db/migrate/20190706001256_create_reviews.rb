class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.float :rating, null: false
      t.integer :author_id, null: false
      t.integer :beer_id, null: false
      t.timestamps
    end
    add_index :reviews, :author_id, unique: true
    add_index :reviews, :beer_id, unique: true
  end
end
