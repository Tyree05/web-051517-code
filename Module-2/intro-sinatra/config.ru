require_relative './config/environment'

use Rack::MethodOverride
use TodosController
run ApplicationController
