# frozen_string_literal: true

class Api::ProductsController < ApplicationController
  before_action :set_product, only: %i[show update destroy]
  before_action :set_category

  def index
    render @category.products.all
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

  def destroy
    @product.destroy
  end

  private

  def product_params
    params.require(:product).permit(
      :title,
      :description,
      :price,
      :category,
      :main_image,
      :alt_image,
      sizes: %i[small medium large noSize]
    )
  end

  def set_product
    @product = category.prodcuts.find(params[:id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end
end
