Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :reviews, only: [:index, :create]
    end  
  end

  #We are nesting as namespaced routes, best practice as it makes clear it is API and version number for future expansion




end
