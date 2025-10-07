#!/usr/bin/env python3
"""
Backend API Testing for Ponto Criativo
Tests all endpoints as specified in the review request
"""

import requests
import json
import sys
from typing import Dict, Any, List
from datetime import datetime

# Backend URL from the review request
BASE_URL = "https://tech-criativa.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BASE_URL
        self.test_results = []
        self.contact_test_data = {
            "name": "João Silva",
            "email": "joao@teste.com", 
            "phone": "11999999999",
            "company": "Test Company",
            "message": "Mensagem de teste"
        }
        
    def log_result(self, test_name: str, success: bool, details: str, response_data: Any = None):
        """Log test result"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {details}")
        
    def test_health_check(self):
        """Test GET /api/ - Health check"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("status") == "online":
                    self.log_result(
                        "Health Check", 
                        True, 
                        f"API is online. Response: {data}",
                        data
                    )
                else:
                    self.log_result(
                        "Health Check", 
                        False, 
                        f"Status not 'online'. Got: {data.get('status')}",
                        data
                    )
            else:
                self.log_result(
                    "Health Check", 
                    False, 
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except Exception as e:
            self.log_result("Health Check", False, f"Request failed: {str(e)}")
    
    def test_get_all_projects(self):
        """Test GET /api/projects - List all projects"""
        try:
            response = requests.get(f"{self.base_url}/projects", timeout=10)
            
            if response.status_code == 200:
                projects = response.json()
                
                if isinstance(projects, list):
                    if len(projects) == 6:
                        # Verify structure of first project
                        if projects:
                            project = projects[0]
                            required_fields = ["id", "title", "category", "client", "description", "image", "tags", "results"]
                            missing_fields = [field for field in required_fields if field not in project]
                            
                            if not missing_fields:
                                self.log_result(
                                    "Get All Projects", 
                                    True, 
                                    f"Found {len(projects)} projects with correct structure",
                                    {"count": len(projects), "sample": project}
                                )
                            else:
                                self.log_result(
                                    "Get All Projects", 
                                    False, 
                                    f"Missing fields in project structure: {missing_fields}",
                                    project
                                )
                        else:
                            self.log_result(
                                "Get All Projects", 
                                False, 
                                "Projects array is empty"
                            )
                    else:
                        self.log_result(
                            "Get All Projects", 
                            False, 
                            f"Expected 6 projects, got {len(projects)}",
                            {"count": len(projects)}
                        )
                else:
                    self.log_result(
                        "Get All Projects", 
                        False, 
                        f"Response is not an array. Got: {type(projects)}",
                        projects
                    )
            else:
                self.log_result(
                    "Get All Projects", 
                    False, 
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except Exception as e:
            self.log_result("Get All Projects", False, f"Request failed: {str(e)}")
    
    def test_filter_projects_by_category(self):
        """Test GET /api/projects?category=E-commerce - Filter projects by category"""
        try:
            response = requests.get(f"{self.base_url}/projects?category=E-commerce", timeout=10)
            
            if response.status_code == 200:
                projects = response.json()
                
                if isinstance(projects, list):
                    # Check that all returned projects are E-commerce category
                    ecommerce_projects = [p for p in projects if p.get("category") == "E-commerce"]
                    
                    if len(projects) == len(ecommerce_projects):
                        self.log_result(
                            "Filter Projects by Category", 
                            True, 
                            f"Found {len(projects)} E-commerce projects. All have correct category.",
                            {"count": len(projects), "projects": [p.get("title") for p in projects]}
                        )
                    else:
                        non_ecommerce = [p for p in projects if p.get("category") != "E-commerce"]
                        self.log_result(
                            "Filter Projects by Category", 
                            False, 
                            f"Found projects with wrong category: {[p.get('category') for p in non_ecommerce]}",
                            projects
                        )
                else:
                    self.log_result(
                        "Filter Projects by Category", 
                        False, 
                        f"Response is not an array. Got: {type(projects)}",
                        projects
                    )
            else:
                self.log_result(
                    "Filter Projects by Category", 
                    False, 
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except Exception as e:
            self.log_result("Filter Projects by Category", False, f"Request failed: {str(e)}")
    
    def test_get_all_services(self):
        """Test GET /api/services - List all services"""
        try:
            response = requests.get(f"{self.base_url}/services", timeout=10)
            
            if response.status_code == 200:
                services = response.json()
                
                if isinstance(services, list):
                    if len(services) == 6:
                        # Verify structure of first service
                        if services:
                            service = services[0]
                            required_fields = ["id", "title", "description", "icon", "features"]
                            missing_fields = [field for field in required_fields if field not in service]
                            
                            if not missing_fields:
                                self.log_result(
                                    "Get All Services", 
                                    True, 
                                    f"Found {len(services)} services with correct structure",
                                    {"count": len(services), "sample": service}
                                )
                            else:
                                self.log_result(
                                    "Get All Services", 
                                    False, 
                                    f"Missing fields in service structure: {missing_fields}",
                                    service
                                )
                        else:
                            self.log_result(
                                "Get All Services", 
                                False, 
                                "Services array is empty"
                            )
                    else:
                        self.log_result(
                            "Get All Services", 
                            False, 
                            f"Expected 6 services, got {len(services)}",
                            {"count": len(services)}
                        )
                else:
                    self.log_result(
                        "Get All Services", 
                        False, 
                        f"Response is not an array. Got: {type(services)}",
                        services
                    )
            else:
                self.log_result(
                    "Get All Services", 
                    False, 
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except Exception as e:
            self.log_result("Get All Services", False, f"Request failed: {str(e)}")
    
    def test_submit_contact(self):
        """Test POST /api/contact - Submit contact form"""
        try:
            headers = {"Content-Type": "application/json"}
            response = requests.post(
                f"{self.base_url}/contact", 
                json=self.contact_test_data,
                headers=headers,
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                
                if data.get("success") is True and "message" in data:
                    self.log_result(
                        "Submit Contact Form", 
                        True, 
                        f"Contact submitted successfully. Message: {data.get('message')}",
                        data
                    )
                else:
                    self.log_result(
                        "Submit Contact Form", 
                        False, 
                        f"Unexpected response format: {data}",
                        data
                    )
            else:
                self.log_result(
                    "Submit Contact Form", 
                    False, 
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except Exception as e:
            self.log_result("Submit Contact Form", False, f"Request failed: {str(e)}")
    
    def test_get_contacts(self):
        """Test GET /api/contacts - List contacts"""
        try:
            response = requests.get(f"{self.base_url}/contacts", timeout=10)
            
            if response.status_code == 200:
                contacts = response.json()
                
                if isinstance(contacts, list):
                    # Look for our test contact
                    test_contact = None
                    for contact in contacts:
                        if (contact.get("name") == self.contact_test_data["name"] and 
                            contact.get("email") == self.contact_test_data["email"]):
                            test_contact = contact
                            break
                    
                    if test_contact:
                        self.log_result(
                            "Get Contacts", 
                            True, 
                            f"Found {len(contacts)} contacts including our test contact",
                            {"total_contacts": len(contacts), "test_contact_found": True}
                        )
                    else:
                        self.log_result(
                            "Get Contacts", 
                            False, 
                            f"Test contact not found in {len(contacts)} contacts. May need to check contact submission.",
                            {"total_contacts": len(contacts), "test_contact_found": False}
                        )
                else:
                    self.log_result(
                        "Get Contacts", 
                        False, 
                        f"Response is not an array. Got: {type(contacts)}",
                        contacts
                    )
            else:
                self.log_result(
                    "Get Contacts", 
                    False, 
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except Exception as e:
            self.log_result("Get Contacts", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests in sequence"""
        print(f"🚀 Starting Backend API Tests for Ponto Criativo")
        print(f"📍 Base URL: {self.base_url}")
        print("=" * 60)
        
        # Run tests in order
        self.test_health_check()
        self.test_get_all_projects()
        self.test_filter_projects_by_category()
        self.test_get_all_services()
        self.test_submit_contact()
        self.test_get_contacts()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        # Show failed tests
        failed_tests = [result for result in self.test_results if not result["success"]]
        if failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in failed_tests:
                print(f"  • {test['test']}: {test['details']}")
        
        return passed == total

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)