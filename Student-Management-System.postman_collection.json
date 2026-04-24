{
	"info": {
		"_postman_id": "c9f7b3b4-c9e8-4000-15a1-b2c360f7b3b4",
		"name": "Student Management System",
		"description": "Postman collection for testing Student Management System API (Experiment 9)",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Health Check",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/",
					"host": ["{{base_url}}"],
					"path": [""]
				},
				"description": "Check if the server is running"
			},
			"response": []
		},
		{
			"name": "Create Student",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"John Doe\",\n    \"email\": \"john@example.com\",\n    \"course\": \"Computer Science\",\n    \"age\": 22\n}"
				},
				"url": {
					"raw": "{{base_url}}/api/students",
					"host": ["{{base_url}}"],
					"path": ["api", "students"]
				},
				"description": "Create a new student record"
			},
			"response": []
		},
		{
			"name": "Get All Students",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/api/students",
					"host": ["{{base_url}}"],
					"path": ["api", "students"]
				},
				"description": "Retrieve all student records"
			},
			"response": []
		},
		{
			"name": "Get Single Student",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/api/students/:id",
					"host": ["{{base_url}}"],
					"path": ["api", "students", ":id"],
					"variable": [
						{
							"key": "id",
							"value": "REPLACE_WITH_STUDENT_ID",
							"description": "Student ID from create response"
						}
					]
				},
				"description": "Retrieve a specific student by ID"
			},
			"response": []
		},
		{
			"name": "Update Student",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"John Smith\",\n    \"age\": 23\n}"
				},
				"url": {
					"raw": "{{base_url}}/api/students/:id",
					"host": ["{{base_url}}"],
					"path": ["api", "students", ":id"],
					"variable": [
						{
							"key": "id",
							"value": "REPLACE_WITH_STUDENT_ID",
							"description": "Student ID to update"
						}
					]
				},
				"description": "Update an existing student record"
			},
			"response": []
		},
		{
			"name": "Delete Student",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{base_url}}/api/students/:id",
					"host": ["{{base_url}}"],
					"path": ["api", "students", ":id"],
					"variable": [
						{
							"key": "id",
							"value": "REPLACE_WITH_STUDENT_ID",
							"description": "Student ID to delete"
						}
					]
				},
				"description": "Delete a student record"
			},
			"response": []
		},
		{
			"name": "Test Validation Errors",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"A\",\n    \"email\": \"invalid-email\",\n    \"course\": \"Invalid Course\",\n    \"age\": 15\n}"
				},
				"url": {
					"raw": "{{base_url}}/api/students",
					"host": ["{{base_url}}"],
					"path": ["api", "students"]
				},
				"description": "Test validation error responses"
			},
			"response": []
		}
	],
	"variable": [
		{
			"key": "base_url",
			"value": "http://localhost:5000",
			"type": "string"
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					"console.log('Testing Student Management System API');"
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					"pm.test(\"Status code is 200 or 201\", function () {",
					"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
					"});",
					"",
					"pm.test(\"Response has success property\", function () {",
					"    var jsonData = pm.response.json();",
					"    pm.expect(jsonData.success).to.be.true;",
					"});"
				]
			}
		}
	]
}