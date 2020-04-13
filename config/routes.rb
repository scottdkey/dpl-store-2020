# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'Admin', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



  namespace :api do
    resources :categories do
      resources :products
    end

  end
  
  namespace :api do
    get '/products', to: 'products#all_products', as: '/products'
    get '/featured_products', to: 'products#featured_products'
  end

  namespace :api do
      resources :purchase_records do
        resources :purchase_products
      end
  end

end
