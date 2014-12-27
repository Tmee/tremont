Rails.application.routes.draw do
  root 'users#index'

  resources :users
  get '/overview', to: 'users#overview'
  get '/community_relations', to: 'users#community_relations'
  get '/history', to: 'users#history'

end
