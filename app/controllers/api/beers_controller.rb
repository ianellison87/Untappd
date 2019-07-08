class Api::BeersController < ApplicationController
  def index
    @beers = Beer.all
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def create
    @beer = Beer.create!(beer_params)
    render :show
  end

  def destroy
    @beer = Beer.find(params[:id])
    @beer.destroy

    render :index
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :brewery_id)
  end

