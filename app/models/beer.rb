# == Schema Information
#
# Table name: beers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  abv        :float            not null
#  ibv        :float            not null
#  brewery_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Beer < ApplicationRecord
  validates :name, :abv, :ibu, :brewed_by, presence: true
  #there is a typo in IBU in your table
  has_many :reviews

  # Active Storage Association
  # has_one_attached :photo

  def average_ration
    reviews.average(:rating)
  end

end
