class Employee:
    def __init__(self, nameofemploye, salaryofemploye):
        self.name = nameofemploye
        self.salary= salaryofemploye

    def printdetails(self):
        return f"name of employee is {self.name} salary of wmployee is {self.salary}"

Harry = Employee("Harry", 4555)
Rohan =Employee("roshan",56666)

print()
