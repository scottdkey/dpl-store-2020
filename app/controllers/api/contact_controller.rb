class Api::ContactController < ApplicationController
  def contact
    ContactMailer.with(
      name: params[:name],
      email: params[:email],
      subject: params[:subject],
      total: params[:total],
      products: params[:products]
    ).contact_email.deliver_now
  end
 
end
