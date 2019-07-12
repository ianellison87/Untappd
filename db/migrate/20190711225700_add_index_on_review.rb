class AddIndexOnReview < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :beer_id
  end
end
