# frozen_string_literal: true

class Api::ProductsController < ApplicationController
  before_action :set_category, except: [:all_products, :featured_products]
  before_action :set_product, only: %i[show update destroy update_image]

  def index
    render json: @category.products.all
  end

  def all_products
    render json: Product.all
  end

  def featured_products
    render json: Product.get_all_featured()
  end

  def show
    render json: @product
  end

  def create
    product = @category.products.new(product_params)
    if product.save
      render json: product
    else
      render json: product.errors, status: 422
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: product.errors, status: 422
    end
  end

  def update_image
    file = params[:file]
    if file
      ext = File.extname(file.tempfile)
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
      @product.main_image = cloud_image['secure_url']
    end
    if @product.save
      render json: @product
    else
      render json: { errors: @product.errors.full_messages }, status: 422
    end
    rescue => e
      render json: { errors: e }, status: 422
  end
  

  def destroy
    @product.destroy
  end

  def search
    render json: Product.search(params)
  end

  private

  def product_params
    params.require(:product).permit(
      :title,
      :description,
      :price,
      :category_id,
      :main_image,
      :featured,
      sizes: %i[Small Medium Large noSize X-Small X-Large],
    )
  end

  def set_product
    @product = @category.products.find(params[:id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

end
