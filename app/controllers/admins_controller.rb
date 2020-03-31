# frozen_string_literal: true

# AdminsController for connection to Devise
class AdminsController < ApplicationController
  def index
    render json: Admin.all
  end

  def show
    render json: Admin.find(params[:id])
  end

  def new; end

  def edit; end
end
