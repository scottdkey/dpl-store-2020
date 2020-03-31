# frozen_string_literal: true

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
