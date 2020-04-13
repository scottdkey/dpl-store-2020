require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get api/images" do
    get images_api/images_url
    assert_response :success
  end

end
