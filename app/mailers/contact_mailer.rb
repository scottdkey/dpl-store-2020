class ContactMailer < ApplicationMailer

 def contact_email
   # send email with variables here
   @name = params[:name]
   @email = params[:email]
   @subject = params[:subject]
   @total = params[:total]
   @products = params[:products]
   mail(to: @email, subject: @subject)


 end

end
