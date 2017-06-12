Rails.application.routes.draw do
  root 'beers#index'

  get 'beers/index'

  get 'beers/new'

  get 'beers/show'

  get 'beers/edit'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
