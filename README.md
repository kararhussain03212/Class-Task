# StudentManager Smart Contract

A simple Solidity smart contract for managing student records on the Ethereum blockchain.

## Overview

The StudentManager contract allows you to store and manage student information including ID, name, age, and department. It provides basic CRUD operations for student data management on the blockchain.

## Features

- **Add Student**: Register new students with unique IDs
- **Update Student**: Modify existing student information
- **Get Student**: Retrieve student details by ID
- **Data Validation**: Ensures student existence and prevents duplicates

## Contract Functions

### `addStudent(uint _id, string memory _name, uint _age, string memory _department)`
Adds a new student to the system.
- **Parameters**:
  - `_id`: Unique student identifier (uint256)
  - `_name`: Student name (string)
  - `_age`: Student age (uint256)
  - `_department`: Student department (string)
- **Requirements**: Student with given ID must not already exist

### `updateStudent(uint _id, string memory _name, uint _age, string memory _department)`
Updates an existing student's information.
- **Parameters**: Same as addStudent
- **Requirements**: Student with given ID must exist

### `getStudent(uint _id) returns (uint, string memory, uint, string memory)`
Retrieves student information by ID.
- **Parameters**:
  - `_id`: Student identifier to query
- **Returns**: Tuple of (id, name, age, department)
- **Requirements**: Student with given ID must exist

## Data Structure

```solidity
struct Student {
    uint id;
    string name;
    uint age;
    string department;
    bool exists;
}
```

## Prerequisites

- Solidity ^0.8.0
- Ethereum development environment (Remix, Hardhat, Truffle, etc.)

## Installation & Setup

1. Clone this repository
2. Open the project in your preferred Ethereum development environment
3. Deploy the `StudentManager` contract to your desired network

## Usage Example

```solidity
// Deploy contract
StudentManager studentManager = new StudentManager();

// Add a student
studentManager.addStudent(1, "John Doe", 20, "Computer Science");

// Update student information
studentManager.updateStudent(1, "John Smith", 21, "Information Technology");

// Get student details
(uint id, string memory name, uint age, string memory dept) = studentManager.getStudent(1);
```

## Testing

The project includes test scenarios in `remix code/scenario.json` that demonstrate:
- Contract deployment
- Adding student records
- Error handling for duplicate entries

## Security Considerations

- Input validation prevents duplicate student IDs
- Existence checks ensure operations are performed on valid records
- Contract uses Solidity 0.8.0+ which includes built-in overflow protection

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Author

StudentManager Contract - Built for educational purposes