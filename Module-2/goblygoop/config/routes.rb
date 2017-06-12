Rails.application.routes.draw do
  root 'beers#index'

  # resources :users do
  #   resources :beers
  # end

  #get 'beers/index'
  get '/beers/search' => 'beers#search'
  post '/beers/search' => 'beers#find_beer'
  resources :beers, except: []
  # get '/beers', to: 'beers#index'
  # get '/beers' => 'beers#index'

  # get 'beers/new'
  #
  # get 'beers/show'
  #
  # get 'beers/edit'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
