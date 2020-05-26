Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< Updated upstream
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create]
=======
  root "messages#index"
  resources :users, only: [:edit, :update]
>>>>>>> Stashed changes
end
