# == Schema Information
#
# Table name: beers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  abv        :float            not null
#  ibu        :float            not null
#  brewed_by  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Beer < ApplicationRecord
  validates :name, :abv, :ibu, :brewed_by, presence: true
 
  has_many :reviews

  has_one_attached :photo

  # Active Storage Association
  # has_one_attached :photo

  def average_rating
    reviews.average(:rating)
  end

end
