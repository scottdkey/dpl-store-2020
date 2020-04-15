# frozen_string_literal: true

Rails.application.routes.draw do
  get 'images/api/images'
  mount_devise_token_auth_for 'Admin', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :categories do
      resources :products
    end

    resources :products, only: [] do
      resources :images, only: [:create, :destroy, :index, :show]
    end
  end

  namespace :api do
    get '/products', to: 'products#all_products', as: '/products'
    get '/products/search', to: 'products#search'
  end

  namespace :api do
    resources :purchase_records do
      resources :purchase_products
    end
  end
end
