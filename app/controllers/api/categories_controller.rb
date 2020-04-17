# frozen_string_literal: true

class Api::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]
  def index
    render json: Category.all
  end

  def show
    render json: @category
  end

  def create
    category = Category.new(category_params)
    if category.save
      render json: category
    else
      render json: category.errors, status: 422
    end
  end

  def update
    file = params[:file]

    if file
      ext = File.extname(file.tempfile)
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
      @category.image = cloud_image['secure_url']
    end
    if @category.update(category_params)
      render json: @category
    else
      render json: category.errors, status: 422
    end
  end

  def destroy
    @category.destroy
  end

  private

  def category_params
    params.require(:category).permit(:name, :image)
  end

  def set_category
    @category = Category.find(params[:id])
  end
end
