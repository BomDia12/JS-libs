class CovidsController < ApplicationController
  def show; end
  def country
    @country = params[:country]
  end
end
