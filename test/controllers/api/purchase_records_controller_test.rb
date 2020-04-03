# frozen_string_literal: true

require 'test_helper'

class Api::PurchaseRecordsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get api_purchase_records_index_url
    assert_response :success
  end

  test 'should get show' do
    get api_purchase_records_show_url
    assert_response :success
  end

  test 'should get create' do
    get api_purchase_records_create_url
    assert_response :success
  end

  test 'should get update' do
    get api_purchase_records_update_url
    assert_response :success
  end

  test 'should get destroy' do
    get api_purchase_records_destroy_url
    assert_response :success
  end
end
