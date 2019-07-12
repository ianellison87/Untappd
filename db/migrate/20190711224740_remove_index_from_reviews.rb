class RemoveIndexFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, name: "index_reviews_on_author_id"
    remove_index :reviews, name: "index_reviews_on_beer_id"
  end
end
