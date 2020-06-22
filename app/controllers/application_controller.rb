class ApplicationController < ActionController::Base
  def homepage
    @countries = [['brazil', 'o Brasil'], ['us', 'os Estados Unidos'], ['united kingdom', 'o Reino Unido'],
                  ['canada', 'o Canada'], ['china', 'a China'], ['spain', 'a Espanha'], ['russia', 'a Russia'],
                  ['india', 'a Índia']]
  end
end
