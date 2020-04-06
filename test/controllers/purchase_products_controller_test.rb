require 'test_helper'

class PurchaseProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get purchase_products_index_url
    assert_response :success
  end

  test "should get show" do
    get purchase_products_show_url
    assert_response :success
  end

  test "should get update" do
    get purchase_products_update_url
    assert_response :success
  end

end
