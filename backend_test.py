import requests
import json
import sys
from datetime import datetime

class WeddingBackendTester:
    def __init__(self, base_url="https://fb117b48-6238-4aa3-88b5-d1bbd24de838.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.text}")
                except:
                    pass
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root endpoint"""
        return self.run_test(
            "Root Endpoint",
            "GET",
            "",
            200
        )

    def test_create_status_check(self, client_name):
        """Test creating a status check"""
        return self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data={"client_name": client_name}
        )

    def test_get_status_checks(self):
        """Test getting all status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )

def main():
    # Setup
    tester = WeddingBackendTester()
    test_client = f"test_client_{datetime.now().strftime('%H%M%S')}"
    
    # Run tests
    print("🔄 Starting backend API tests...")
    
    # Test root endpoint
    root_success, _ = tester.test_root_endpoint()
    if not root_success:
        print("❌ Root endpoint test failed, but continuing with other tests")
    
    # Test creating a status check
    create_success, create_response = tester.test_create_status_check(test_client)
    if not create_success:
        print("❌ Create status check test failed, but continuing with other tests")
    
    # Test getting all status checks
    get_success, get_response = tester.test_get_status_checks()
    if not get_success:
        print("❌ Get status checks test failed")
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())