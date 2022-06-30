class AddProducts < ActiveRecord::Migration[6.1]
  def change

    Product.create :title => 'Hawaiian',
      :description => 'Это гавайская пицца',
      :price => 350,
      :size => 30,
      :is_spicy => false,
      :is_veg => false,
      :is_best_offer => false,
      :path_to_image => '/images/hawaiian.jpg'

    Product.create :title => 'Pepperoni',
      :description => 'Это пицца Пепперони',
      :price => 450,
      :size => 30,
      :is_spicy => false,
      :is_veg => false,
      :is_best_offer => true,
      :path_to_image => '/images/pepperoni.jpg'

    Product.create :title => 'Vegetable',
      :description => 'Это вегетарианская пицца',
      :price => 400,
      :size => 30,
      :is_spicy => false,
      :is_veg => true,
      :is_best_offer => false,
      :path_to_image => '/images/veg.jpg'

  end
end
