Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#homepage'
  resource :calendar, :covid
  get '/covid/:country', to: 'covids#country'
end
