# frozen_string_literal: true

class Api::ImagesController < ApplicationController
  before_action :set_product
  before_action :set_image, only: [:show, :update, :destroy]

  def index
    render json: @product.images.all
  end

  def show
    render json: @image
  end

  def create
    image = @product.images.new
    file = params[:file]
    if file
      ext = File.extname(file.tempfile)
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
      image.url = cloud_image['secure_url']
      if image.save
        render json: image
      else
        render json: image.errors, status: 422
      end
    end
  end

  def destroy
    @image.destroy
  end

  private

  def set_product
    @product = Product.find(params[:product_id])
  end

  def set_image
    @image = @product.images.find(params[:id])
  end

end
