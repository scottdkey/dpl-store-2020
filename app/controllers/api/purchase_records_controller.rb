# frozen_string_literal: true

class Api::PurchaseRecordsController < ApplicationController
  before_action :set_purchase_record, only: %i[show update destroy]

  def index
    render json: PurchaseRecord.all
  end

  def show
    render json: @purchase_record
  end

  def create
    purchase_record = PurchaseRecord.new(purchase_record_paramas)
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
    params.require(:purchase_record).permit(:order_total, :email_address, :first_name, :last_name, :address_one, :address_two, :city, :state, :zip_code, :fufilled)
  end

  def set_purchase_record
    @purchase_record = PurchaseRecord.find(params[:id])
  end
end
