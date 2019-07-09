# == Schema Information
#
# Table name: breweries
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  location   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Brewery < ApplicationRecord
  validates :name, :location, presence: true

end
