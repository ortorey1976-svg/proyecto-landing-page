import requests
import sys
from datetime import datetime
import json

class MedicalLandingPageAPITester:
    def __init__(self, base_url="https://milestone-view-10.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_base = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, timeout=30):
        """Run a single API test"""
        url = f"{self.api_base}{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=timeout)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=timeout)
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                if response.content:
                    try:
                        response_data = response.json()
                        print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                        return success, response_data
                    except json.JSONDecodeError:
                        print(f"   Response (text): {response.text[:100]}...")
                        return success, response.text
                else:
                    return success, {}
            else:
                print(f"❌ FAILED - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ FAILED - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "/",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission with valid data"""
        contact_data = {
            "nombre": "Test Patient",
            "telefono": "999-123-4567",
            "email": "test@example.com",
            "motivo": "Dolor de rodilla",
            "zona_afectada": "rodilla",
            "ciudad": "Mérida",
            "mensaje": "Tengo dolor constante en la rodilla derecha",
            "acepta_privacidad": True
        }
        
        return self.run_test(
            "Contact Form Submission",
            "POST",
            "/contact",
            200,
            data=contact_data
        )

    def test_contact_form_without_privacy(self):
        """Test contact form submission without privacy acceptance"""
        contact_data = {
            "nombre": "Test Patient",
            "telefono": "999-123-4567",
            "email": "test@example.com",
            "motivo": "Dolor de rodilla",
            "zona_afectada": "rodilla",
            "ciudad": "Mérida",
            "mensaje": "Tengo dolor constante en la rodilla derecha",
            "acepta_privacidad": False
        }
        
        return self.run_test(
            "Contact Form Without Privacy (should fail)",
            "POST",
            "/contact",
            400,
            data=contact_data
        )

    def test_contact_form_missing_fields(self):
        """Test contact form submission with missing required fields"""
        contact_data = {
            "nombre": "Test Patient",
            # Missing required fields
            "acepta_privacidad": True
        }
        
        return self.run_test(
            "Contact Form Missing Fields (should fail)",
            "POST",
            "/contact",
            422,  # FastAPI validation error
            data=contact_data
        )

    def test_get_contact_leads(self):
        """Test retrieving contact leads"""
        return self.run_test(
            "Get Contact Leads",
            "GET",
            "/leads",
            200
        )

    def test_status_endpoint_create(self):
        """Test status endpoint creation"""
        status_data = {
            "client_name": "Medical Landing Page Test"
        }
        
        return self.run_test(
            "Create Status Check",
            "POST",
            "/status",
            200,
            data=status_data
        )

    def test_status_endpoint_get(self):
        """Test status endpoint retrieval"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "/status",
            200
        )

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Medical Landing Page API Testing...")
        print(f"   Base URL: {self.base_url}")
        print(f"   API Base: {self.api_base}")
        
        # Test basic connectivity
        print("\n" + "="*50)
        print("BASIC CONNECTIVITY TESTS")
        print("="*50)
        
        self.test_root_endpoint()
        
        # Test contact form functionality
        print("\n" + "="*50)
        print("CONTACT FORM TESTS")
        print("="*50)
        
        self.test_contact_form_submission()
        self.test_contact_form_without_privacy()
        self.test_contact_form_missing_fields()
        self.test_get_contact_leads()
        
        # Test status endpoints
        print("\n" + "="*50)
        print("STATUS ENDPOINT TESTS")
        print("="*50)
        
        self.test_status_endpoint_create()
        self.test_status_endpoint_get()
        
        # Print results
        print("\n" + "="*50)
        print("TESTING SUMMARY")
        print("="*50)
        print(f"📊 Tests passed: {self.tests_passed}/{self.tests_run}")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed! Backend API is working correctly.")
            return True
        else:
            failed_tests = self.tests_run - self.tests_passed
            print(f"⚠️  {failed_tests} test(s) failed. Please check the issues above.")
            return False

def main():
    """Main test execution"""
    tester = MedicalLandingPageAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())