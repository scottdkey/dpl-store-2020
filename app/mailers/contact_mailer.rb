class ContactMailer < ApplicationMailer

 def contact_email
   # send email with variables here
   @name = params[:name]
   @email = params[:email]
   @subject = params[:subject]
   @total = params[:total]
   mail(to: 'Bbell9563@gmail.com', subject: @subject)


 end

end
