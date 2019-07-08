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

require 'test_helper'

class BeerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
