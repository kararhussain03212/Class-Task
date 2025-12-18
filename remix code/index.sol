// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentManager {

    struct Student {
        uint id;
        string name;
        uint age;
        string department;
        bool exists;
    }

    mapping(uint => Student) private students;

    function addStudent(
        uint _id,
        string memory _name,
        uint _age,
        string memory _department
    ) public {
        require(!students[_id].exists, "Student already exists");

        students[_id] = Student(
            _id,
            _name,
            _age,
            _department,
            true
        );
    }

    function updateStudent(
        uint _id,
        string memory _name,
        uint _age,
        string memory _department
    ) public {
        require(students[_id].exists, "Student does not exist");

        Student storage student = students[_id];
        student.name = _name;
        student.age = _age;
        student.department = _department;
    }

    function getStudent(uint _id)
        public
        view
        returns (uint, string memory, uint, string memory)
    {
        require(students[_id].exists, "Student does not exist");

        Student memory student = students[_id];
        return (
            student.id,
            student.name,
            student.age,
            student.department
        );
    }
}
