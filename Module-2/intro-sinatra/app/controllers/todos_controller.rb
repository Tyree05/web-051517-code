class TodosController < ApplicationController

# displays all of our todo items
  get "/todos" do
    @todos = Todo.all
    erb(:'/todos/index')
  end
#   def render(template)
#   path = File.expand_path("../views/#{template}", __FILE__)
#   ERB.new(File.read(path)).result(binding)
#   end
# displays a specific todo item
  get '/todos/new' do
    erb :'/todos/new'
  end

  get "/todos/:id" do
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      @todo = Todo.find(params[:id])
      erb :'todos/show'
    else
      erb :'404', layout: false
    end
  end

  get '/todos/:id/edit' do
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      @todo = Todo.find(params[:id])
      erb :'/todos/edit'
    else
      erb :'404', layout: false
    end
  end

  delete '/todos/:id' do
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      todo = Todo.find(params[:id])
      todo.destroy
      redirect '/todos'
    else
      erb :'404', layout: false
    end
  end

  put '/todos/:id' do
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      if params[:todo][:complete]
        todo = Todo.find(params[:id])
        todo.update(params[:todo])
        redirect "/todos/#{todo.id}"
      else
        todo = Todo.find(params[:id])
        todo.title = params[:todo][:title]
        todo.complete = false
        todo.save
        redirect "/todos/#{todo.id}"
      end
    else
      erb :'404', layout: false
    end
  end

  post '/todos' do
    binding.pry
    new_todo = Todo.new(params[:todo])
    if new_todo.save
      redirect '/todos'
    else
      @error = new_todo.errors.full_messages[0]
      erb :'/todos/new'
    end
  end
end
