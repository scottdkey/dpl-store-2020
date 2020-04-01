class Api::PurchaseRecordsController < ApplicationController
  before_actions: :set_purchase_record, only: [:show, :update, :destroy]

  def index
    render json: Purchase_Record.All
  end

  def show
    render json: @purchase_record
  end

  def create
    purchase_record = Purchase_Record.new(purchase_record_paramas)
    if purchase_record.save
      render json: purchase_record
    else
      render json: purchase_record.error, status: 422
    end
  end

  def update
    if @purchase_record.update(purchase_record_paramas)
      render json: @purchase_record
    else
      render json: purchase_record.error, status: 422
    end
  end

  def destroy
    @purchase_record.destroy
  end

  private

  def purchase_record_paramas
    params.require(purchase_record).permit(:order_total, :email_address, :first_name, :last_name, :address_one, :address_two, :city, :state, :zip_code, :fulfilled)
  end

  def set_purchase_record
    @purchase_record = Purchase_Record.find(params[:id])
  end
end
