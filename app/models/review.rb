# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :float            not null
#  author_id  :integer          not null
#  beer_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  belongs_to :beer


end
