class Api::PurchaseProductsController < ApplicationController
  before_action :set_purchase_product, only: [:show, :update, :destroy]
  before_action :set_purchase_record

  def index
    render json: @purchase_record.purchase_products.all
  end

  def show
    # before action
    render json: @purchase_product
  end

  def create
    purchase_product = @purchase_record.purchase_products.new(purchase_product_params)
    if purchase_product.save
      render json: purchase_product
    else 
      render json: purchase_product.errors, status: 422
    end
  end

  def update
    # before action
    if @purchase_product.update(purchase_product_params)
      render json: @purchase_product
    else
      render json: @purchase_product.errors, status: 422
    end
  end

  def destroy
    # before action
    @purchase_product.destroy
  end

  private

  def purchase_product_params
    params.require(:purchase_product).permit(:quantity, :size_choice, :product_id)
  end

  def set_purchase_product
    @purchase_product = @purchase_record.purchase_products.find(params[:id])
  end

  def set_purchase_record
    @purchase_record = PurchaseRecord.find(params[:purchase_record_id])
  end
end