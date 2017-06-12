class BeersController < ApplicationController
  def index
    @beers = Beer.all
  end

  def new
  end

  def show
  end

  def edit
  end
end
