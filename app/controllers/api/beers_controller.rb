class Api::BeersController < ApplicationController
  def index
    beers = Beer.all

    @beers = beers.includes(:reviews)
    render :index
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

    redirect_to :back
    # render :index
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :brewed_by, :photo, :description)
  end
end

