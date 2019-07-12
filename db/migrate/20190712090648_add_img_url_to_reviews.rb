class AddImgUrlToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :img_url, :string
  end
end
