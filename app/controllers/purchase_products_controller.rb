class PurchaseProductsController < ApplicationController
  before_actions: :set_purchase_product, only: [:show, :update, :destroy]

  def index
    render json: Purchase_Product.All
  end

  def show
    # before action
    render json: @purchase_product
  end

  def create
    purchase_product = Purchase_Product.new(purchase_product_params)
  end

  def update
    # before action
    if @purchase_product.update(purchase_product_params)
      render json: @purchase_product
    else
      render json: purchase_product.error, status: 422
    end
  end

  def destroy
    # before action
    @purchase_product.destroy
  end

  private

  def purchase_product_params
    params.require(purchase_product).permit(:quantity, :size_choice)
  end

  def set_purchase_product
    @purchase_product = Purchase_Product.find(params[:id])
  end

end
