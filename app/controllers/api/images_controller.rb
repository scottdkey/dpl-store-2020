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
    image = @product.images.new(images_params)
    if image.save
      render json: image
    else
      render json: produt.errors, status: 422
    end
  end

  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: 422
    end
  end


  def destroy
    @image.destroy
  end

  private

    def image_params
      params.require(:image).permit(:type, :url)
    end

    def set_product
      @product = @category.products.find(params[:product_id])
    end
    
    def set_category
      @category = Category.find(params[:category_id])
    end
end
