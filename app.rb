#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/ActiveRecord'

set :database, { adapter: 'sqlite3', database: 'pizzashop.db' }

class Product < ActiveRecord::Base 
	validates :name, presence: true, length: { minimum: 3 }
	validates :phone, presence: true
	validates :datestamp, presence: true
	validates :color, presence: true
end	

get '/' do
	erb :index
end

get '/about' do
	erb :about
end
