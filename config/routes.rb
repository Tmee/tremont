Rails.application.routes.draw do
  root 'users#index'

  resources :users
  get '/overview', to: 'users#overview'

end
