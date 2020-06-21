class ApplicationController < ActionController::Base
  def homepage
    @countries = ['brazil', 'us', 'united kingdom', 'canada', 'china', 'spain', 'rusia', 'india']
  end
end
