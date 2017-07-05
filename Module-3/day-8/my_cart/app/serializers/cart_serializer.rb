class CartSerializer < ActiveModel::Serializer
  attributes :user_email

  has_many :items
end
