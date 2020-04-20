class Api::ContactController < ApplicationController
  def contact
    puts params[:products]
    ContactMailer.with(
      name: params[:name],
      email: params[:email],
      subject: params[:subject],
      total: params[:total],
      products: JSON.parse(params[:products])
    ).contact_email.deliver_now
  end
 
end
